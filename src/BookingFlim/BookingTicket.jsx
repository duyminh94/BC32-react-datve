import React, { Component } from 'react'
import style from './Style.module.scss'
import Information from './Information'
import data from "./Data.json"
import HangGhe from './HangGhe'

export default class BookingTicket extends Component {
    
    handlehangGhe = () => {
        return data.map((hangGhe, index) => {
            return <div key={index}>
                <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
            </div>
        })
    }

    render() {
        return (
            <div>
                <div className={style.background}>
                    <div className={style.overlay}>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-sm-8 text-center'>
                                    <h1 className='text-success display-5'>Đặt Vé Xem Phim CYBERLEAN.VN</h1>
                                    <h5 className='mt-1 text-center text-white'>Màn Hình</h5>
                                    <div className='d-flex justify-content-center mt-3'>
                                        <div className={style.screen}></div>
                                    </div>
                                    {this.handlehangGhe()}
                                </div>
                                <div className='col-sm-4'>
                                    <div className='mt-3 text-white'>Danh Sách Ghế Bạn Chọn</div>
                                    <Information />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
