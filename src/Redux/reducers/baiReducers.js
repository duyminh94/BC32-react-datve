const statedefautl = {
    danhSachGheBanChon : [],
}

export const baiReducers = (state = statedefautl, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheBanChonUpdate = [...state.danhSachGheBanChon]
            let index = danhSachGheBanChonUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.payload.soGhe)
            if (index !== -1) {
                danhSachGheBanChonUpdate.splice(index, 1)
            } else {
                danhSachGheBanChonUpdate.push(action.payload)
            }
            state.danhSachGheBanChon = danhSachGheBanChonUpdate
            return { ...state }
        }
        case 'HUY_GHE': {
            let danhSachGheBanChonUpdate = [...state.danhSachGheBanChon]
            let index = danhSachGheBanChonUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.payload)
            if (index !== -1) {
                danhSachGheBanChonUpdate.splice(index, 1)
            }
            state.danhSachGheBanChon = danhSachGheBanChonUpdate
            return { ...state }

        }

        default: return { ...state }
    }
}