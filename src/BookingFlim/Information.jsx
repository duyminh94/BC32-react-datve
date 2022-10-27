import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './Style.module.scss'

export class Information extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='mt-5 text-left'>
            <button className={style.gheDuocChon}></button><span className='text-white px-4'style={{fontSize:25}}>Ghế Đã Đặt</span>
            <br />
            <button className={style.gheDangChon}></button><span className='text-white px-2'style={{fontSize:23}}>Ghế Đang Chọn</span>
            <br />
            <button className={style.ghe}></button><span className='text-white px-3'style={{fontSize:23}}>Ghế Chưa Chọn</span>
          </div>
          <div className='mt-3'>
            <table className='table table-bordered' border={1}>
              <thead>
                <tr className='text-white'>
                  <th>Số Ghế</th>
                  <th>Giá</th>
                  <th>Hủy Đặt Vé</th>
                </tr>
              </thead>
              <tbody className='text-warning'>
                {this.props.danhSachGheBanChon.map((gheDangDat, index) => {
                  return <tr key={index}>
                    <th>{gheDangDat.soGhe}</th>
                    <th>{(gheDangDat.gia).toLocaleString()} VND</th>
                    <th>
                      <button className='text-danger' onClick={() => {
                        this.props.handleHuyGhe(gheDangDat.soGhe)
                      }}>X</button>
                    </th>
                  </tr>
                })}
              </tbody>
              <tfoot >
                <tr>
                  <th className='text-light'>Tổng tiền</th>
                  <th className='text-warning'>{this.props.danhSachGheBanChon.reduce((tongTien, gheDangDat, index) => {
                    return tongTien += gheDangDat.gia
                  }, 0).toLocaleString()} VND</th>
                  <th>
                    <button className='bg-light border-none'>Đặt vé</button>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducers) => {
  return {
    danhSachGheBanChon: rootReducers.baiReducers.danhSachGheBanChon
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleHuyGhe: (soGhe) => {
      dispatch({
        type: 'HUY_GHE',
        payload: soGhe
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Information)