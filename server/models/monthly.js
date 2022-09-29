const mongoose = require('mongoose');

const monthlySchema = new mongoose.Schema({

        Date:{
            type: String,
            
        },
        Year:{
            type: Number,
            
        },
        Algerian_dinar:{
            type: Number,
            
        },
        Australian_dollar:{
            type: Number,
            
        },
        Bahrain_dinar:{
            type: Number,
            
        },
        Bolivar_Fuerte:{
            type: Number,
            
        },
        Botswana_pula:{
            type: Number,
            
        },
        Brazilian_real:{
            type: Number,
            
        },
        Brunei_dollar:{
            type: Number,
            
        },
        Brunei_dollar:{
            type: Number,
            
        },
        Canadian_dollar:{
            type: Number,
            
        },
        Chilean_peso:{
            type: Number,
            
        },
        Chinese_yuan:{
            type: Number,
            
        },
        Colombian_peso:{
            type: Number,
            
        },
        Czech_koruna:{
            type: Number,
            
        },
        Danish_krone:{
            type: Number,
            
        },
        Euro:{
            type: Number,
            
        },
        Hungarian_forint:{
            type: Number,
            
        },
        Icelandic_krona:{
            type: Number,
            
        },
        Indian_rupee:{
            type: Number,
            
        },
        Indonesian_rupiah:{
            type: Number,
            
        },
        Iranian_rial:{
            type: Number,
            
        },
        Israeli_New_Shekel:{
            type: Number,
            
        },
        Japanese_yen:{
            type: Number,
            
        },
        Kazakhstani_tenge:{
            type: Number,
            
        },
        Korean_won:{
            type: Number,
            
        },
        Kuwaiti_dinar:{
            type: Number,
            
        },
        Libyan_dinar:{
            type: Number,
            
        },
        Malaysian_ringgit:{
            type: Number,
            
        },
        Mauritian_rupee:{
            type: Number,
            
        },
        Mexican_peso:{
            type: Number,
            
        },
        Nepalese_rupee:{
            type: Number,
            
        },
        New_Zealand_dollar:{
            type: Number,
            
        },
        Norwegian_krone:{
            type: Number,
            
        },
        Omani_rial:{
            type: Number,
            
        },
        Pakistani_rupee:{
            type: Number,
            
        },
        Peruvian_sol:{
            type: Number,
            
        },
        Philippine_peso:{
            type: Number,
            
        },
        Polish_zloty:{
            type: Number,
            
        },
        Qatari_riyal:{
            type: Number,
            
        },
        Russian_ruble:{
            type: Number,
            
        },
        Saudi_Arabian_riyal:{
            type: Number,
            
        },
        Singapore_dollar:{
            type: Number,
            
        },
        South_African_rand:{
            type: Number,
            
        },
        Sri_Lankan_rupee:{
            type: Number,
            
        },
        Swedish_krona:{
            type: Number,
            
        },
        Swiss_franc:{
            type: Number,
            
        },
        Thai_baht:{
            type: Number,
            
        },
        Trinidadian_dollar:{
            type: Number,
            
        },
        UAE_dirham:{
            type: Number,
            
        },
        UK_pound:{
            type: Number,
            
        },
        US_dollar:{
            type: Number,
            
        },
        Uruguayan_peso:{
            type: Number,
            
        }
})

module.exports = mongoose.model('monthly',monthlySchema);