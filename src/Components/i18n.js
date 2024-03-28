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
            announ:'Duyurular',
            mtmdesctitle:'Bölüm Tanıtımı',
            mtmdesc:'Matematik Mühendisliği, diğer mühendislerle matematiksel modelleme, problemleri analiz etme ve çözme gibi konularda birlikte çalışmayı veya benzer görevleri tek başlarına gerçekleştirmeyi amaçlayan disiplinler arası bir mühendisliktir. Matematik Mühendisleri, projelerde diğer mühendislerle çalışabilecek çok yönlü mühendisler olarak görülürler ve ayrıca problem modelleme, çözüm önerme ve analitik düşünme konularında yeteneklidirler.',
            mtmworkar:'Bir matematik mühendisinin çalışma olanakları oldukça geniştir. Matematik Mühendisleri iş hayatının çok geniş bir alanında kendilerini kanıtlamışlardır. Mühendislik, ekonomi ve hizmet sektörlerinde ortaya çıkan problemlerin modellenmesi, çözümlenmesi ve yorumlanması aşamalarında etkin rol almaktadırlar. Ayrıca, eğitim alanında da, orta ve yükseköğretimde, başarılı Matematik Mühendislerine rastlanmaktadır. Bütün bu nedenlerden dolayı, ölümümüz öğrenci seçim sınavında puanı yüksek olan öğrenciler tarafından seçilmektedir.',
            mtmworkarlist:'Matematik Mühendisliğinin belli başlı görev alanları bu şekilde gruplandırılabilir: Bilişim, Finans, İş analistliği, Üretim Planlama, Stratejik Planlama, İnsan Kaynakları, Akademisyenlik.',
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
            research: 'Researches',
            project:'Projects',
            about:'About',
            announ:'Announcements',
            mtmdesctitle:'Department Introduction',
            mtmdesc:'Mathematical Engineering is an interdisciplinary engineering discipline aimed at collaborating with other engineers in tasks such as mathematical modeling, problem analysis, and solution. Mathematical Engineers are seen as versatile engineers capable of working with other engineers on projects and are also proficient in problem modeling, proposing solutions, and analytical thinking',
            mtmworkar:'The career opportunities for a mathematical engineer are quite extensive. Mathematical Engineers have proven themselves in a wide range of fields in the professional world. They play an active role in modeling, analyzing, and interpreting problems emerging in engineering, economics, and service sectors. Moreover, successful Mathematical Engineers can also be found in the education sector, both in secondary and higher education. For all these reasons, our department is chosen by students who score high in the university entrance exam.',
            mtmworkarlist:'The main job areas of Mathematical Engineering can be grouped as follows: Information Technology, Finance, Business Analysis, Production Planning, Strategic Planning, Human Resources, and Academician.',
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