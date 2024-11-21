// وظيفة ترجمة النصوص لخدمة "ناطق"
function translateText() {
    const inputText = document.getElementById('input-text').value;
    const outputText = document.getElementById('output-text');

    if (inputText.trim() === "") {
        outputText.value = "يرجى إدخال نص للترجمة.";
    } else {
        // هنا يمكنك إضافة API حقيقية للترجمة أو محاكاة النص
        outputText.value = "ترجمة محاكاة: " + inputText;
    }
}

// وظيفة لإظهار رسالة تأكيد عند الضغط على رابط في القائمة
function confirmNavigation(event) {
    if (!confirm("هل تريد الانتقال إلى الصفحة؟")) {
        event.preventDefault(); // يمنع الانتقال إذا اختار المستخدم "إلغاء"
    }
}

// ربط الأحداث بالروابط في القائمة
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', confirmNavigation);
    });
});

// وظيفة للتأكد من أن الحقول ليست فارغة قبل الإرسال
function validateForm(event) {
    const inputField = document.getElementById('input-text');

    if (inputField.value.trim() === "") {
        alert("يرجى إدخال نص قبل الإرسال!");
        event.preventDefault(); // يمنع الإرسال إذا الحقل فارغ
    }
}
