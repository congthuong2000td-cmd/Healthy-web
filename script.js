// ==========================================
// 1. Translation Maps & Bilingual Localization Engine
// ==========================================
const translations = {
    en: {
        app_title: "HealthTrack",
        nav_home: "Home",
        nav_calc: "BMI Calculator",
        nav_tracker: "Daily Tracker",
        
        // Home Screen
        hero_title: "Track Your Health Smarter",
        hero_subtitle: "Calculate BMI, TDEE and build healthy habits with our comprehensive health dashboard",
        btn_get_started: "Get Started",
        btn_track_daily: "Track Daily",
        why_choose_title: "Why Choose HealthTrack?",
        feature1_title: "Track Progress",
        feature1_desc: "Monitor your health metrics over time and achieve consistency.",
        feature2_title: "Personalized Plans",
        feature2_desc: "Get custom meal plans based on your direct physical goals.",
        feature3_title: "Science-Based",
        feature3_desc: "Calculations and suggestions backed by standard medical formulas.",
        feature4_title: "Easy to Use",
        feature4_desc: "Simple, intuitive and fast interface designed for everyone.",
        cta_title: "Start Your Health Journey Today",
        cta_desc: "Join thousands of users who are already tracking their health metrics and achieving their dream bodies.",
        cta_btn: "Calculate Your BMI Now",

        // BMI Page Header
        calc_header_title: "Health Calculator",
        calc_header_subtitle: "Know your standard BMI, BMR, and customize your diet plan",
        calc_card_title: "Health Calculator",
        
        // Form labels
        label_name: "Full Name",
        placeholder_name: "Enter your name",
        label_gender: "Gender",
        gender_male: "Male",
        gender_female: "Female",
        label_age: "Age",
        placeholder_age: "Enter your age",
        label_height: "Height (cm)",
        placeholder_height: "Enter your height",
        label_weight: "Weight (kg)",
        placeholder_weight: "Enter your weight",
        label_activity: "Activity Level",
        
        // Activity Levels
        activity_sed: "Sedentary (little to no exercise)",
        activity_light: "Lightly active (1-3 days/week)",
        activity_mod: "Moderate (exercise 3-5 days/week)",
        activity_very: "Very active (6-7 days/week)",
        activity_super: "Super active (very hard exercise/job)",
        btn_calc: "Calculate Now",

        // Error Messages
        err_name: "Please enter your name",
        err_age: "Age must be greater than 0",
        err_height: "Height must be greater than 0",
        err_weight: "Weight must be greater than 0",
        err_form: "Please fix the errors in the form",
        err_numbers: "Please enter valid numerical values",

        // Results Section
        results_title: "Your Results",
        bmi_card_title: "BMI",
        bmr_card_title: "BMR",
        tdee_card_title: "TDEE (Total Daily Energy Expenditure)",
        unit_cal_day: "calories/day",
        scale_title: "BMI Classification",
        
        // BMI statuses
        status_under: "Underweight",
        status_normal: "Normal",
        status_over: "Overweight",
        status_obese: "Obese",

        stat_water_title: "Daily Water Intake",
        stat_cal_title: "Recommended Calories",
        meal_plan_title: "Balanced Meal Plan",
        meal_plan_subtitle: "Maintain your healthy weight",
        target_cal_prefix: "Target Daily Calories:",
        
        // Meals
        meal_breakfast: "Breakfast",
        meal_breakfast_desc: "Greek yogurt, berries, granola",
        meal_lunch: "Lunch",
        meal_lunch_desc: "Quinoa bowl, grilled vegetables, chickpeas",
        meal_dinner: "Dinner",
        meal_dinner_desc: "Lean protein, mixed greens, whole grains",
        meal_snack: "Snacks",
        meal_snack_desc: "Fruits, nuts, veggies with hummus",

        // Tracker Screen
        tracker_header_title: "Daily Health Tracker",
        tracker_header_subtitle: "Log your daily food intake and water consumption dynamically",
        indicator_total_cal: "Total Calories",
        indicator_remain_cal: "Remaining",
        indicator_water: "Water Intake",
        indicator_bmi: "BMI Status",
        
        // Tracker cards
        card_water_title: "Water Intake",
        btn_water_250: "+250ml",
        btn_water_500: "+500ml",
        btn_reset: "Reset",
        
        card_food_title: "Food Calories",
        placeholder_food_name: "Meal name (e.g. Chicken Salad)",
        placeholder_food_cal: "Calories",
        placeholder_food_prot: "Protein (g)",
        placeholder_food_carbs: "Carbs (g)",
        placeholder_food_fat: "Fat (g)",
        btn_add_meal: "Add Meal",
        empty_meal_title: "No meals added yet",
        empty_meal_desc: "Start tracking your food intake",
        meal_unit_cal: "cal",
        meal_deleted: "Meal removed successfully",
        meal_added_toast: "Meal added successfully!",
        water_reset_toast: "Water intake reset",
        water_added_toast: "Added water successfully!",
        calc_success_toast: "Calculation complete!",
        not_calculated: "Not calculated",
        unit_left: "left",
        unit_over: "over",
        unit_of: "of"
    },
    vi: {
        app_title: "HealthTrack",
        nav_home: "Trang Chủ",
        nav_calc: "Công Cụ BMI",
        nav_tracker: "Theo Dõi Hàng Ngày",
        
        // Home Screen
        hero_title: "Theo Dõi Sức Khỏe Thông Minh Hơn",
        hero_subtitle: "Tính toán chỉ số BMI, TDEE và xây dựng thói quen lành mạnh với bảng điều khiển trực quan",
        btn_get_started: "Bắt Đầu Ngay",
        btn_track_daily: "Theo Dõi Hàng Ngày",
        why_choose_title: "Tại Sao Nên Chọn HealthTrack?",
        feature1_title: "Theo Dõi Tiến Trình",
        feature1_desc: "Giám sát chỉ số sức khỏe của bạn theo thời gian để đạt được sự nhất quán.",
        feature2_title: "Kế Hoạch Cá Nhân Hóa",
        feature2_desc: "Nhận chế độ ăn uống tùy chỉnh dựa trên mục tiêu thể chất trực tiếp của bạn.",
        feature3_title: "Khoa Học Chứng Minh",
        feature3_desc: "Các thuật toán và gợi ý dựa trên các công thức y khoa chuẩn quốc tế.",
        feature4_title: "Dễ Dàng Sử Dụng",
        feature4_desc: "Giao diện đơn giản, trực quan và nhanh chóng dành cho tất cả mọi người.",
        cta_title: "Bắt Đầu Hành Trình Sức Khỏe Hôm Nay",
        cta_desc: "Tham gia cùng hàng ngàn người dùng đã theo dõi sức khỏe và có được vóc dáng mơ ước.",
        cta_btn: "Tính Chỉ Số BMI Của Bạn Ngay",

        // BMI Page Header
        calc_header_title: "Công Cụ Tính Toán Sức Khỏe",
        calc_header_subtitle: "Biết chỉ số BMI, BMR tiêu chuẩn của bạn và tùy chỉnh chế độ ăn uống phù hợp",
        calc_card_title: "Tính Toán Thể Chất",
        
        // Form labels
        label_name: "Họ và Tên",
        placeholder_name: "Nhập tên của bạn",
        label_gender: "Giới Tính",
        gender_male: "Nam",
        gender_female: "Nữ",
        label_age: "Tuổi",
        placeholder_age: "Nhập tuổi",
        label_height: "Chiều Cao (cm)",
        placeholder_height: "Nhập chiều cao",
        label_weight: "Cân Nặng (kg)",
        placeholder_weight: "Nhập cân nặng",
        label_activity: "Mức Độ Vận Động",
        
        // Activity Levels
        activity_sed: "Thụ động (ít hoặc không tập thể dục)",
        activity_light: "Vận động nhẹ (tập 1-3 ngày/tuần)",
        activity_mod: "Vận động vừa phải (tập 3-5 ngày/tuần)",
        activity_very: "Vận động nhiều (tập 6-7 ngày/tuần)",
        activity_super: "Vận động cực nặng (tập rất nặng/công việc tay chân)",
        btn_calc: "Tính Toán Ngay",

        // Error Messages
        err_name: "Vui lòng nhập tên của bạn",
        err_age: "Tuổi phải lớn hơn 0",
        err_height: "Chiều cao phải lớn hơn 0",
        err_weight: "Cân nặng phải lớn hơn 0",
        err_form: "Vui lòng sửa các lỗi trong biểu mẫu",
        err_numbers: "Vui lòng nhập các giá trị số hợp lệ",

        // Results Section
        results_title: "Kết Quả Của Bạn",
        bmi_card_title: "Chỉ số BMI",
        bmr_card_title: "Chỉ số BMR",
        tdee_card_title: "TDEE (Tổng Năng Lượng Tiêu Thụ Hàng Ngày)",
        unit_cal_day: "calo/ngày",
        scale_title: "Phân Loại Thể Trạng BMI",
        
        // BMI statuses
        status_under: "Thiếu cân",
        status_normal: "Bình thường",
        status_over: "Thừa cân",
        status_obese: "Béo phì",

        stat_water_title: "Nước Uống Hàng Ngày",
        stat_cal_title: "Khuyên Dùng Hàng Ngày",
        meal_plan_title: "Thực Đơn Cân Bằng",
        meal_plan_subtitle: "Duy trì cân nặng khỏe mạnh của bạn",
        target_cal_prefix: "Mục Tiêu Calo Mỗi Ngày:",
        
        // Meals
        meal_breakfast: "Bữa Sáng",
        meal_breakfast_desc: "Sữa chua Hy Lạp, quả mọng, yến mạch dẹt",
        meal_lunch: "Bữa Trưa",
        meal_lunch_desc: "Cơm hạt diêm mạch, rau củ nướng, đậu gà",
        meal_dinner: "Bữa Tối",
        meal_dinner_desc: "Đạm nạc (ức gà/cá), salad rau trộn, ngũ cốc nguyên hạt",
        meal_snack: "Bữa Phụ",
        meal_snack_desc: "Trái cây, hạt dinh dưỡng, rau củ kèm sốt hummus",

        // Tracker Screen
        tracker_header_title: "Nhật Ký Sức Khỏe Hàng Ngày",
        tracker_header_subtitle: "Theo dõi lượng thức ăn nạp vào và lượng nước tiêu thụ một cách trực quan",
        indicator_total_cal: "Tổng Calo Nạp",
        indicator_remain_cal: "Calo Còn Lại",
        indicator_water: "Nước Đã Uống",
        indicator_bmi: "Thể Trạng BMI",
        
        // Tracker cards
        card_water_title: "Lượng Nước Tiêu Thụ",
        btn_water_250: "+250ml",
        btn_water_500: "+500ml",
        btn_reset: "Đặt Lại",
        
        card_food_title: "Lượng Thực Phẩm & Calo",
        placeholder_food_name: "Tên món ăn (Ví dụ: Ức Gà Áp Chảo)",
        placeholder_food_cal: "Lượng Calo",
        placeholder_food_prot: "Đạm (g)",
        placeholder_food_carbs: "Tinh bột (g)",
        placeholder_food_fat: "Chất béo (g)",
        btn_add_meal: "Thêm Món Ăn",
        empty_meal_title: "Chưa có món ăn nào được thêm",
        empty_meal_desc: "Bắt đầu theo dõi nhật ký ăn uống của bạn",
        meal_unit_cal: "calo",
        meal_deleted: "Đã xóa món ăn thành công",
        meal_added_toast: "Đã thêm món ăn thành công!",
        water_reset_toast: "Lượng nước uống đã được đặt lại",
        water_added_toast: "Đã thêm nước thành công!",
        calc_success_toast: "Đã tính toán thành công!",
        not_calculated: "Chưa tính toán",
        unit_left: "calo còn lại",
        unit_over: "calo vượt mức",
        unit_of: "trên"
    }
};

// Application Global State
let currentLang = localStorage.getItem('language') || 'en';
let currentTheme = localStorage.getItem('theme') || 'light';
const pageTemplates = {
    home: 'home.html',
    calculator: 'calculator.html',
    tracker: 'tracker.html'
};
let currentPage = null;

// ==========================================
// 2. Client SPA Router
// ==========================================
async function loadPage(pageId) {
    if (!pageTemplates[pageId]) pageId = 'home';
    const container = $('#pageContainer');

    if ($(`#${pageId}Page`).length === 0) {
        try {
            const response = await fetch(pageTemplates[pageId]);
            if (!response.ok) throw new Error(`Failed to load page: ${pageId}`);
            const html = await response.text();
            container.append(html);
        } catch (error) {
            console.error(error);
            container.html(`<div class="container py-5"><p>Unable to load page content.</p></div>`);
            return;
        }
    }

    $('.nav-pills .nav-link').removeClass('active');
    $(`.nav-pills a[href="#${pageId}"]`).addClass('active');

    $('.spa-page').addClass('d-none');
    $(`#${pageId}Page`).hide().removeClass('d-none').fadeIn(350);

    currentPage = pageId;
    updateLanguageUI();
    renderWaterIntake();
    renderMealsList();
}

async function navigateToPage(pageId) {
    const validPages = ['home', 'calculator', 'tracker'];
    if (!validPages.includes(pageId)) pageId = 'home';

    await loadPage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Router Event Listener for Hash change
window.addEventListener('hashchange', () => {
    const pageId = window.location.hash.replace('#', '');
    navigateToPage(pageId);
});

// ==========================================
// 3. UI Toast Notification System
// ==========================================
function showToast(text, isError = false) {
    const toast = $('#floatingToast');
    const icon = $('#toastIcon');
    const textSpan = $('#toastText');

    // Clear classes
    toast.removeClass('bg-success bg-danger');
    icon.removeClass('fa-circle-check fa-circle-exclamation');

    if (isError) {
        toast.addClass('bg-danger');
        icon.addClass('fa-circle-exclamation');
    } else {
        toast.addClass('bg-success');
        icon.addClass('fa-circle-check');
    }

    textSpan.text(text);
    toast.stop(true, true).fadeIn(250).delay(2500).fadeOut(350);
}

// ==========================================
// 4. Language Engine Methods
// ==========================================
function updateLanguageUI() {
    $('[data-translate]').each(function() {
        const key = $(this).attr('data-translate');
        const langObj = translations[currentLang];
        
        if (langObj && langObj[key]) {
            // Apply translation to text, placeholder, or option
            if ($(this).is('input')) {
                $(this).attr('placeholder', langObj[key]);
            } else if ($(this).is('select') && $(this).hasClass('custom-input')) {
                // If it's the main select element, we don't overwrite its direct text,
                // but we translate its option children
            } else {
                $(this).text(langObj[key]);
            }
        }
    });

    // Translate specific select options
    $('#gender option[value="male"]').text(translations[currentLang].gender_male);
    $('#gender option[value="female"]').text(translations[currentLang].gender_female);
    
    $('#activity option[value="1.2"]').text(translations[currentLang].activity_sed);
    $('#activity option[value="1.375"]').text(translations[currentLang].activity_light);
    $('#activity option[value="1.55"]').text(translations[currentLang].activity_mod);
    $('#activity option[value="1.725"]').text(translations[currentLang].activity_very);
    $('#activity option[value="1.9"]').text(translations[currentLang].activity_super);

    // Update food form placeholders
    $('#foodName').attr('placeholder', translations[currentLang].placeholder_food_name);
    $('#foodCalories').attr('placeholder', translations[currentLang].placeholder_food_cal);
    $('#foodProtein').attr('placeholder', translations[currentLang].placeholder_food_prot);
    $('#foodCarbs').attr('placeholder', translations[currentLang].placeholder_food_carbs);
    $('#foodFat').attr('placeholder', translations[currentLang].placeholder_food_fat);
    
    $('#fullName').attr('placeholder', translations[currentLang].placeholder_name);
    $('#age').attr('placeholder', translations[currentLang].placeholder_age);
    $('#height').attr('placeholder', translations[currentLang].placeholder_height);
    $('#weight').attr('placeholder', translations[currentLang].placeholder_weight);

    // Update Header Toggle button text
    $('#langToggle').text(currentLang === 'en' ? 'VN' : 'EN');

    // Trigger updates for current state values
    renderWaterIntake();
    renderMealsList();
}

// ==========================================
// 5. Theme preference (Dark / Light)
// ==========================================
function updateThemeUI() {
    $('html').attr('data-theme', currentTheme);
    const themeBtnIcon = $('#themeToggle i');
    
    if (currentTheme === 'dark') {
        themeBtnIcon.removeClass('fa-moon').addClass('fa-sun');
    } else {
        themeBtnIcon.removeClass('fa-sun').addClass('fa-moon');
    }
}

// ==========================================
// 6. Water Intake Module Implementation
// ==========================================
let waterIntake = parseInt(localStorage.getItem('waterIntake')) || 0;
let waterGoal = parseInt(localStorage.getItem('waterGoal')) || 2000;

function saveWaterState() {
    localStorage.setItem('waterIntake', waterIntake);
    localStorage.setItem('waterGoal', waterGoal);
}

function renderWaterIntake() {
    const lang = translations[currentLang];
    
    // Update labels in circular ring
    $('#waterCircleValue').text(waterIntake);
    $('#waterCircleGoal').text(`/ ${waterGoal} ml`);
    
    let percent = Math.min((waterIntake / waterGoal) * 100, 100);
    percent = Math.round(percent);
    $('#waterCirclePercent').text(`${percent}%`);

    // SVG Circular progress ring calculations
    const circumference = 615; // 2 * pi * r = 2 * 3.14159 * 98
    let offset = circumference - (percent / 100) * circumference;
    $('#waterProgressRing').css('stroke-dashoffset', offset);

    // Update Tracker Top Bar Indicator Card
    $('#summaryWaterIntake').text(`${waterIntake} / ${waterGoal} ml`);
}

function addWater(amount) {
    waterIntake += amount;
    if (waterIntake < 0) waterIntake = 0;
    saveWaterState();
    renderWaterIntake();
    showToast(translations[currentLang].water_added_toast + ` (+${amount}ml)`);
}

function resetWater() {
    waterIntake = 0;
    saveWaterState();
    renderWaterIntake();
    showToast(translations[currentLang].water_reset_toast);
}

// ==========================================
// 7. Food Tracker / Log Module Implementation
// ==========================================
let loggedMeals = JSON.parse(localStorage.getItem('loggedMeals')) || [];

function saveMealsState() {
    localStorage.setItem('loggedMeals', JSON.stringify(loggedMeals));
}

function renderMealsList() {
    const lang = translations[currentLang];
    const mealList = $('#mealList');
    const emptyState = $('#mealEmptyState');
    
    mealList.empty();

    if (loggedMeals.length === 0) {
        emptyState.removeClass('d-none');
    } else {
        emptyState.addClass('d-none');
        
        loggedMeals.forEach((meal, index) => {
            const protein = meal.protein ? `${meal.protein}g P` : '';
            const carbs = meal.carbs ? `${meal.carbs}g C` : '';
            const fat = meal.fat ? `${meal.fat}g F` : '';
            const macros = [protein, carbs, fat].filter(Boolean).join(' | ');

            const itemHTML = `
                <div class="log-item">
                    <div>
                        <h6 class="fw-bold mb-1 text-dark">${meal.name}</h6>
                        ${macros ? `<span class="text-muted small">${macros}</span>` : ''}
                    </div>
                    <div class="d-flex align-items-center gap-3">
                        <span class="badge bg-primary rounded-pill px-3 py-2">${meal.calories} ${lang.meal_unit_cal}</span>
                        <button class="delete-btn" onclick="deleteMeal(${index})" title="Remove entry">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `;
            mealList.append(itemHTML);
        });
    }

    // Dynamic Calculations for Top Panel Summary
    let totalCaloriesLogged = 0;
    loggedMeals.forEach(meal => totalCaloriesLogged += meal.calories);

    // Goal calories defaults to calculated TDEE or 2000ml standard
    let goalCalories = parseInt(localStorage.getItem('calculatedTDEE')) || 2000;
    let remainingCalories = goalCalories - totalCaloriesLogged;

    // Render numbers in top indicators
    $('#summaryTotalCalories').text(`${totalCaloriesLogged} / ${goalCalories} cal`);
    
    if (remainingCalories >= 0) {
        $('#summaryRemainingCalories').text(`${remainingCalories} ${lang.unit_left}`);
        // Ensure color classes
        $('#summaryRemainingCalories').parent().find('.tracker-summary-icon').css({
            'color': 'var(--success-color)',
            'background-color': 'var(--bg-green-light)'
        });
    } else {
        $('#summaryRemainingCalories').text(`${Math.abs(remainingCalories)} ${lang.unit_over}`);
        $('#summaryRemainingCalories').parent().find('.tracker-summary-icon').css({
            'color': 'var(--danger-color)',
            'background-color': 'var(--bg-red-light)'
        });
    }

    // Render calculated BMI details dynamically in indicator card 4
    let savedBMI = localStorage.getItem('calculatedBMI');
    let savedBMIStatus = localStorage.getItem('calculatedBMIStatus');
    
    if (savedBMI && savedBMIStatus) {
        let localizedStatus = lang['status_' + savedBMIStatus.toLowerCase()] || savedBMIStatus;
        $('#summaryBmiStatus').text(`${localizedStatus} (${savedBMI})`);
    } else {
        $('#summaryBmiStatus').text(lang.not_calculated);
    }
}

function addMeal(name, calories, protein, carbs, fat) {
    const newMeal = {
        name: name,
        calories: parseInt(calories),
        protein: protein ? parseInt(protein) : 0,
        carbs: carbs ? parseInt(carbs) : 0,
        fat: fat ? parseInt(fat) : 0
    };

    loggedMeals.push(newMeal);
    saveMealsState();
    renderMealsList();
    showToast(translations[currentLang].meal_added_toast);
}

function deleteMeal(index) {
    loggedMeals.splice(index, 1);
    saveMealsState();
    renderMealsList();
    showToast(translations[currentLang].meal_deleted);
}

// ==========================================
// 8. Physical BMI Computations & Validators
// ==========================================
function validateForm() {
    let isValid = true;
    const name = $('#fullName');
    const age = $('#age');
    const height = $('#height');
    const weight = $('#weight');

    // Reset validations
    $('.custom-input').removeClass('is-invalid');
    $('.error-message').hide();

    if ($.trim(name.val()) === '') {
        name.addClass('is-invalid');
        $('#errName').css('display', 'flex');
        isValid = false;
    }

    const ageVal = parseFloat(age.val());
    if (isNaN(ageVal) || ageVal <= 0) {
        age.addClass('is-invalid');
        $('#errAge').css('display', 'flex');
        isValid = false;
    }

    const heightVal = parseFloat(height.val());
    if (isNaN(heightVal) || heightVal <= 0) {
        height.addClass('is-invalid');
        $('#errHeight').css('display', 'flex');
        isValid = false;
    }

    const weightVal = parseFloat(weight.val());
    if (isNaN(weightVal) || weightVal <= 0) {
        weight.addClass('is-invalid');
        $('#errWeight').css('display', 'flex');
        isValid = false;
    }

    return isValid;
}

function runHealthCalculations() {
    const lang = translations[currentLang];
    
    let gender = $('#gender').val();
    let age = parseFloat($('#age').val());
    let heightCm = parseFloat($('#height').val());
    let weightKg = parseFloat($('#weight').val());
    let activityMult = parseFloat($('#activity').val());

    // 1. BMI Calculation
    let heightM = heightCm / 100;
    let bmi = weightKg / (heightM * heightM);
    let bmiFormatted = bmi.toFixed(1);

    // Determine status & pointers
    let bmiStatusKey = "";
    let bmiColorClass = "";
    let bmiPercent = 0; // percentage position on scale slider

    if (bmi < 18.5) {
        bmiStatusKey = "under";
        bmiColorClass = "bg-info";
        bmiPercent = Math.min((bmi / 18.5) * 18.5, 18.5); // scale 0-18.5%
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiStatusKey = "normal";
        bmiColorClass = "bg-success";
        bmiPercent = 18.5 + ((bmi - 18.5) / 6.5) * 6.5; // scale 18.5-25%
    } else if (bmi >= 25 && bmi < 30) {
        bmiStatusKey = "over";
        bmiColorClass = "bg-warning text-dark";
        bmiPercent = 25 + ((bmi - 25) / 5) * 5; // scale 25-30%
    } else {
        bmiStatusKey = "obese";
        bmiColorClass = "bg-danger";
        bmiPercent = 30 + ((bmi - 30) / 10) * 10; // scale 30-40%
        if(bmiPercent > 100) bmiPercent = 100;
    }

    // 2. Mifflin-St Jeor BMR formula
    let bmr = 0;
    if (gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
    bmr = Math.round(bmr);

    // 3. TDEE
    let tdee = Math.round(bmr * activityMult);

    // 4. Water Intake suggestions (~35ml per kg)
    let waterIntakeSuggestion = Math.round(weightKg * 35);

    // Save outputs locally to persistent storage
    localStorage.setItem('calculatedBMI', bmiFormatted);
    localStorage.setItem('calculatedBMIStatus', lang['status_' + bmiStatusKey]);
    localStorage.setItem('calculatedBMR', bmr);
    localStorage.setItem('calculatedTDEE', tdee);
    
    // Sync water goal and re-render daily tracker goal
    waterGoal = waterIntakeSuggestion;
    saveWaterState();
    
    // Update Results UI
    $('#bmiValue').text(bmiFormatted);
    $('#bmiStatus').text(lang['status_' + bmiStatusKey]).removeClass('bg-info bg-success bg-warning bg-danger text-dark').addClass(bmiColorClass);
    $('#bmrValue').text(bmr);
    $('#tdeeValue').text(tdee);
    
    $('#waterIntake').text(waterIntakeSuggestion + " ml/" + (currentLang === 'en' ? 'day' : 'ngày'));
    $('#recCalories').text(tdee + " cal/" + (currentLang === 'en' ? 'day' : 'ngày'));

    // Move pointer on scale dynamically
    $('#bmiPointer').css('left', Math.min(Math.max(bmiPercent, 0), 100) + '%');

    // Update target meal calorie plans
    let breakfast = Math.round(tdee * 0.20);
    let lunch = Math.round(tdee * 0.35);
    let dinner = Math.round(tdee * 0.30);
    let snacks = tdee - breakfast - lunch - dinner;

    $('#targetCaloriesMeal').text(tdee);
    $('#calBreakfast').text(breakfast + " cal");
    $('#calLunch').text(lunch + " cal");
    $('#calDinner').text(dinner + " cal");
    $('#calSnack').text(snacks + " cal");

    // Success notifications
    showToast(lang.calc_success_toast);
    
    // Animate and show results section smoothly
    $('#resultsSection').hide().removeClass('d-none').slideDown(750, function() {
        $('html, body').animate({
            scrollTop: $("#resultsSection").offset().top - 80
        }, 500);
    });

    // Re-render trackers
    renderMealsList();
    renderWaterIntake();
}

// ==========================================
// 9. Document Ready Event Listeners Initialization
// ==========================================
$(document).ready(function() {
    
    // Initialize Theme preference from store
    updateThemeUI();

    // Initialize Localization Language engine
    updateLanguageUI();

    // Check URL route hash on load, navigate to active
    let initialPage = window.location.hash.replace('#', '') || 'home';
    navigateToPage(initialPage);

    // Lang toggle trigger click
    $('#langToggle').on('click', function() {
        currentLang = (currentLang === 'en') ? 'vi' : 'en';
        localStorage.setItem('language', currentLang);
        updateLanguageUI();
        showToast(currentLang === 'en' ? "Language changed to English" : "Đã chuyển ngôn ngữ sang Tiếng Việt");
    });

    // Theme Toggle trigger click
    $('#themeToggle').on('click', function() {
        currentTheme = (currentTheme === 'light') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        updateThemeUI();
    });

    // BMI Calculator Form Submission
    $(document).on('submit', '#healthForm', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            runHealthCalculations();
        } else {
            showToast(translations[currentLang].err_form, true);
        }
    });

    // Remove red highlight classes immediately on manual typing/fix
    $(document).on('input change', '.custom-input', function() {
        if ($(this).val() !== '') {
            $(this).removeClass('is-invalid');
            $(this).next('.error-message').hide();
        }
    });

    // Interactive Water buttons Click Events
    $(document).on('click', '#btnWaterDec', function() {
        addWater(-250);
    });

    $(document).on('click', '#btnWaterInc250', function() {
        addWater(250);
    });

    $(document).on('click', '#btnWaterInc500', function() {
        addWater(500);
    });

    $(document).on('click', '#btnWaterReset', function() {
        resetWater();
    });

    // Food Calories form Submission
    $(document).on('submit', '#foodForm', function(e) {
        e.preventDefault();
        
        const nameInput = $('#foodName');
        const calInput = $('#foodCalories');
        const protInput = $('#foodProtein');
        const carbInput = $('#foodCarbs');
        const fatInput = $('#foodFat');

        // Simple validation
        nameInput.removeClass('is-invalid');
        calInput.removeClass('is-invalid');

        let hasError = false;
        if ($.trim(nameInput.val()) === '') {
            nameInput.addClass('is-invalid');
            hasError = true;
        }

        const calories = parseFloat(calInput.val());
        if (isNaN(calories) || calories <= 0) {
            calInput.addClass('is-invalid');
            hasError = true;
        }

        if (hasError) {
            showToast(translations[currentLang].err_form, true);
            return;
        }

        // Add to array, re-render, save
        addMeal(
            nameInput.val(),
            calories,
            protInput.val(),
            carbInput.val(),
            fatInput.val()
        );

        // Reset fields
        nameInput.val('');
        calInput.val('');
        protInput.val('');
        carbInput.val('');
        fatInput.val('');
        nameInput.focus();
    });

    // Sync views on startup
    renderWaterIntake();
    renderMealsList();
});
