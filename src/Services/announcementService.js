const AnnouncementService = {
  getAnnouncement: () => {
    return [
      {
        id: 1,
        date: "March 27, 2024",
        title: "2023-2024 Bahar Yarıyılı Lisans Arasınav Programı",
        subtitle: "2023-2024 Bahar Yarıyılı Lisans Arasınav Programı",
        content:
          "2023-2024 Öğretim Yılı Bahar Yarıyılı Lisans 1. arasınav programı aşağıda sunulmaktadır.",
        photoUrl: "https://www.mapfre.com.tr/blog/media/2020/05/sinav-kaygisi-ile-basa-cikma-yontemleri.jpeg",
      },
      {
        id: 2,
        date: "March 21, 2024",
        title: "2024-2025 Erasmus Tercihleri Hakkında",
        subtitle: "Erasmus",
        content:
          " 21 Mart 2024 tarihi saat 12:30'da Matematik Mühendisliği Erasmus Komisyonu tarafından yapılan toplantıda belirtildiği üzere Tercih formalarını eksiksiz imzalı bir şekilde doldurup aşağıdaki bağlantı adresinden yüklemeniz gerekmektedir.Tercih yapmayacak öğrencilerin de ekte yer alan feragat formunu doldurup imzalı bir şekilde yüklemesi gerekmektedir. pdf formatında olması tercih edilir.  Tercih formunun yüklenmesi için son tarih 22 Mart 2024 tarihi Cuma günü saat 23:59'dur. Bu tarihten sonra gönderilen formlar değerlendirmeye alınmayacaktır. Sadece 4. sınıf öğrencileri, ek olarak ders eşleştirme tablosu ve transkript belgesi yüklemesi gereklidir. Süreç takviminde de belirtildiği üzere yerleştirme sonuçları ve yerleştirme sonucunda boş kalan kontenjanlar 23 Mart 2024 Cumartesi günü sizlere e-posta ile duyurulacaktır. Detaylı tüm bilgiler öğrencilerin e-posta adreslerine gönderilmiştir.  Erasmus komisyonundan e-posta almadıysanız handenur@yildiz.edu.tr veya fakgun@yildiz.edu.tr adresleriyle iletişime geçebilirsiniz. ",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DSt5YmDB56j0lfapUgf_ExpPMqCZD9ItBue_ThI4BA&s",
      },

      {
        id: 3,
        date: "February 26, 2024",
        title: "2023-2024 Bahar Yarıyılı Lisans ve Lisansüstü Ders Programları (26.02.2024 Güncellendi)",
        subtitle: "Ders Program",
        content:
          "2023-2024 Bahar Yarıyılı Lisans Ders Programı (21.02.2024 Güncel) 2023-2024 Bahar Yarıyılı Lisansüstü Ders Programı (26.02.2024 Güncel) ",
        photoUrl: "https://iokul.com/blog/content/images/size/w960/2021/08/5695967.jpg",
      },
      // Add more announcements as needed
    ];
  },
  getAnnouncementById: (id) => {
    const announcements = AnnouncementService.getAnnouncement();
    return announcements.find(announcement => announcement.id === id);
  }

};

export default AnnouncementService;
