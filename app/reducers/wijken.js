
import { START_LOADING, DONE_LOADING, ERROR_LOADING } from '../action_types/loading'

let initialState = [
    {
        id: 1,
        name: 'Hilligersberg-Schiebroek',
        picture: 'https://www.google.nl/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,niGCkQNkoLzWHTW6HWpP4Uh8Yxrch1kr_swv-bJfC9sHEPALowTDxutemvkNZzcdCw3UYpLMdwvFypVFlM3-NPVZG2QpZnohYZEu6asf_eFRBo5JDW4dtCi4ZbhGtRM0Z_OU6ziupCvIwie2_o1XwObidwX9OJ2EsjhsOL_i0QNTW7WRYv0rHo4oB8l58tYs9LycAHLknWaZ72BX_1W5SuTha6CgdxJVANIX1xADwde11O28j75hJChbN29AstMF84-mms96DC8G1kEvcIIYRYCkgDnG0WU'
    },
    {
        id: 2,
        name: 'Beverwaard',
        picture: 'https://www.google.nl/maps/vt/data=RfCSdfNZ0LFPrHSm0ublXdzhdrDFhtmHhN1u-gM,2VA5Wol2jfxR6a22a5tKhhPjF84WU_6PcXyXkVhDBxujnuUa2AX1fHCsUH9kBYurfldxaJb7yowy3gJcVN1BnsLJJmwI-ihone-_niwy5WUWSScuNnBS_3Os6zuxNmC8ETwhNLhU8OIrKZgkC0LXJf0Y1lPoIVT_5P4_NT5mNQrrejucXwKilOtV59sHKdMoldN4MK_LQAFUYMswKvsZQLKj-Vhox_QQ2T7CaFjJ-sZHXtz2ZowUD36lw0lSZehdyWGLRrzn-8y6_DXHbAklkZZAghDlow'
    }
]

const wijken = (state = initialState, action) => {
    switch (action.type) {
        // case START_LOADING:
        //     return true
        // case DONE_LOADING:
        //     return false
        // case ERROR_LOADING:
        //     return false
        default:
            return state
    }
}

export {wijken}