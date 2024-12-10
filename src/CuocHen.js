import { Link } from "react-router-dom";
const DatLichKham = () => {
  return (
    <div className="cuochen mt-5 mb-5">
      <div className="container">
      <table class="table table-bordered">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Tên Bác sỹ</th>
            <th scope="col">ID Bác sỹ</th>
            <th scope="col">Tổng số cuộc hẹn</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>PGS. TS. BSCKII. TTUT Vũ Văn Hòe</td>
            <td>122345</td>
            <td>102</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>ThS.BS Nguyễn Trần Trung</td>
            <td>192345</td>
            <td>62</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>Bác sĩ Chuyên khoa II Trần Trọng Thắng</td>
            <td>892345</td>
            <td>69</td>
            </tr>
        </tbody>
    </table>
      </div>
    </div>
  );
};

export default DatLichKham;
