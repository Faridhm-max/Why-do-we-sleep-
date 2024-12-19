// اختيار الزر باستخدام ID
const downloadButton = document.getElementById("downloadButton");

// إضافة حدث عند الضغط على الرابط
downloadButton.addEventListener("click", function (event) {
    // منع التحميل التلقائي (يمكن إلغاء هذا السطر إذا لم ترغب في إيقاف التحميل)
    event.preventDefault();

    // عرض رسالة تأكيد
    const userConfirmed = confirm("هل تريد تحميل الكتاب بصيغة PDF؟");

    // إذا أكد المستخدم، يتم توجيهه لتحميل الملف
    if (userConfirmed) {
        window.location.href = "book.pdf";
        alert("يتم الآن تحميل الكتاب. شكرًا لك!");
    } else {
        alert("تم إلغاء التحميل.");
    }
});

