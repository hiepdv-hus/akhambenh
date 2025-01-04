import React, { useEffect, useState } from "react";
import "./Test.css"

const ExamTabGuard = () => {
  const [showPopup, setShowPopup] = useState(false); // Hiển thị popup
  const [examCanceled, setExamCanceled] = useState(false); // Trạng thái bài thi đã hủy

  // Kích hoạt chế độ fullscreen
  const enableFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  };

  // Gọi API hủy bài thi
  const cancelExam = async () => {
    await cancelExamApi(); // Gọi API hủy bài thi
    setExamCanceled(true); // Đánh dấu bài thi đã hủy
    setShowPopup(true); // Hiển thị popup
  };

  const cancelExamApi = async () => {
    // Gọi API hủy bài thi
    return await fetch("/api/cancel-exam", { method: "POST" });
  };
  // Xử lý sự kiện thoát fullscreen
  const handleFullscreenChange = () => {
    if (!document.fullscreenElement && !examCanceled) {
      cancelExam(); // Hủy bài thi khi thoát fullscreen
    }
  };

  // Xử lý khi tab bị mất focus
  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden" && !examCanceled) {
      cancelExam(); // Hủy bài thi khi chuyển tab
    }
  };

  // Thoát trang khi nhấn OK
  const handleExit = () => {
    window.location.href = "/test"; // Điều hướng ra khỏi trang
  };

  useEffect(() => {
    // Lắng nghe sự kiện fullscreen và visibility change
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      // Xóa sự kiện khi component bị hủy
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [examCanceled]);

  return (
    <div>
      <button onClick={enableFullscreen}>Bắt đầu thi</button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Bài thi của bạn đã bị hủy</h3>
            <p>Vui lòng liên hệ giám thị nếu cần hỗ trợ.</p>
            <div className="popup-actions">
              <button onClick={handleExit}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamTabGuard;
