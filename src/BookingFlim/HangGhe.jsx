import React, { Component } from 'react'
import { connect } from 'react-redux'
import style from './Style.module.scss'

export class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let GheDaDat = '';
            let disabled = false;
            //Trạng thái ghế đã có người đặt
            if (ghe.daDat) {
                GheDaDat = `${style.gheDuocChon}`;
                disabled = true;
            }

            //xét trạng thái ghế đang đặt
            let gheDangDat = '';
            let indexGheDangDat = this.props.danhSachGheBanChon.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                gheDangDat = `${style.gheDangChon}`
            }

            return <button
                onClick={() => {
                    this.props.handleDatGhe(ghe)
                }} 
                className={`${style.ghe} ${GheDaDat} ${gheDangDat}`}
                key={index}
                disabled={disabled}>
                {index + 1}
            </button>
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return <button className={style.rowNumber} key={index}>
                {hang.soGhe}
            </button>
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return <div className='ml-1'>
                {this.props.hangGhe.hang}
                {this.renderSoHang()}
            </div>
        }
        return <div>
            {this.props.hangGhe.hang}
            {this.renderGhe()}
        </div>
    }

    render() {
        return (
            <div className='text-light text-left ml-5 mt-1'>
                {this.renderHangGhe()}
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
        handleDatGhe: (ghe) => {
            dispatch({
                type: 'DAT_GHE',
                payload: ghe
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(HangGhe) 
