import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    tr: {
        translation:{
            ytu: 'Yıldız Teknik Üniversitesi',
            matmuh: 'Matematik Mühendisliği',
            home: 'Ana Sayfa',
            studies: 'Çalışmalar',
            lectures: 'Dersler',
            rmore: 'Okumaya Devam Et',
            smore: 'Daha Fazla Gör',
            depart: 'Bölüm',
            research: 'Araştırmalar',
            project:'Projeler',
            about:'Hakkında',

        }
    },
    en:{
        translation:{
            ytu: 'Yıldız Technical University',
            matmuh: 'Mathematical Engineering',
            home: 'Home',
            studies: 'Studies',
            lectures: 'Lectures',
            rmore: 'Read More',
            smore: 'See More',
            depart: 'Department',
            research: 'Research',
            project:'Project',
            about:'About',
        }
    }
}

i18n
.use(initReactI18next)
.init({
    lng: 'tr',
    resources
})

export default i18n