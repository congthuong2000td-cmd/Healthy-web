// Shared JavaScript logic for HealthTrack pages

// Navigation module: highlight active page and smooth fade-in elements
function initNavigation() {
  const page = document.body.dataset.page;
  const links = document.querySelectorAll(".navbar-nav .nav-link");
  links.forEach((link) => {
    if (
      link.getAttribute("href").includes(`${page}`) ||
      (page === "home" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  const animated = document.querySelectorAll(
    ".fade-in, .feature-card, .stat-card, .card",
  );
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 },
  );
  animated.forEach((item) => observer.observe(item));
}

// Home module: counter animation
function initHome() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = +counter.dataset.target;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 100));
    const update = () => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
      } else {
        counter.textContent = current;
        requestAnimationFrame(update);
      }
    };
    update();
  });
}

// BMI module: calculate BMI, show category, save to localStorage
function initBMI() {
  const bmiForm = document.getElementById("bmiForm");
  const bmiResult = document.getElementById("bmiResult");
  const bmiEmpty = document.getElementById("bmiEmpty");
  const bmiValue = document.getElementById("bmiValue");
  const bmiCategory = document.getElementById("bmiCategory");
  const bmiMarker = document.getElementById("bmiMarker");

  function getCategory(bmi) {
    if (bmi < 18.5) return { label: "Thiếu cân", color: "bmi-progress-blue" };
    if (bmi < 25) return { label: "Bình thường", color: "bmi-progress-green" };
    if (bmi < 30) return { label: "Thừa cân", color: "bmi-progress-yellow" };
    if (bmi < 35) return { label: "Béo phì", color: "bmi-progress-red" };
    return { label: "Béo phì nặng", color: "bmi-progress-dark" };
  }

  function getMarkerPercent(bmi) {
    if (bmi <= 18.5) return (bmi / 18.5) * 20;
    if (bmi <= 24.9) return 20 + ((bmi - 18.5) / 6.4) * 20;
    if (bmi <= 29.9) return 40 + ((bmi - 24.9) / 5) * 20;
    if (bmi <= 34.9) return 60 + ((bmi - 29.9) / 5) * 20;
    return Math.min(80 + ((bmi - 34.9) / 15) * 20, 100);
  }

  function saveBMI(record) {
    localStorage.setItem("latestBMI", JSON.stringify(record));
    const history = JSON.parse(localStorage.getItem("healthHistory") || "[]");
    history.push({
      date: record.date,
      weight: record.weight,
      bmi: record.bmi,
      tdee: null,
    });
    localStorage.setItem("healthHistory", JSON.stringify(history));
  }

  bmiForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const bmi = +(weight / (height / 100) ** 2).toFixed(1);
    const category = getCategory(bmi);
    const record = {
      height,
      weight,
      gender,
      bmi,
      category: category.label,
      date: new Date().toLocaleDateString("vi-VN"),
    };

    bmiValue.textContent = record.bmi;
    bmiCategory.textContent = `${record.category} — BMI ${record.bmi}`;
    const markerPercent = getMarkerPercent(record.bmi);
    bmiMarker.style.left = `${markerPercent}%`;
    bmiMarker.style.opacity = "1";
    bmiResult.classList.remove("d-none");
    bmiEmpty.classList.add("d-none");

    saveBMI(record);
    localStorage.setItem("latestBMI", JSON.stringify(record));
  });
}

// BMR/TDEE module: calculate energy and save to localStorage
function initTDEE() {
  const tdeeForm = document.getElementById("tdeeForm");
  const tdeeAlert = document.getElementById("tdeeAlert");
  const tdeeResult = document.getElementById("tdeeResult");
  const tdeeEmpty = document.getElementById("tdeeEmpty");
  const bmrValue = document.getElementById("bmrValue");
  const tdeeValue = document.getElementById("tdeeValue");
  const maintenanceValue = document.getElementById("maintenanceValue");
  const lossValue = document.getElementById("lossValue");
  const gainValue = document.getElementById("gainValue");

  function showAlert(message) {
    tdeeAlert.textContent = message;
    tdeeAlert.classList.remove("d-none");
  }

  function hideAlert() {
    tdeeAlert.classList.add("d-none");
  }

  function saveTDEE(record) {
    localStorage.setItem("latestTDEE", JSON.stringify(record));
    const history = JSON.parse(localStorage.getItem("healthHistory") || "[]");
    history.push({
      date: record.date,
      weight: record.weight,
      bmi: null,
      tdee: record.tdee,
    });
    localStorage.setItem("healthHistory", JSON.stringify(history));
  }

  tdeeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    hideAlert();

    const age = Number(document.getElementById("age").value);
    const height = Number(document.getElementById("heightTdee").value);
    const weight = Number(document.getElementById("weightTdee").value);
    const gender = document.querySelector(
      'input[name="genderTdee"]:checked',
    ).value;
    const activity = Number(document.getElementById("activityLevel").value);

    if (!Number.isInteger(age) || age < 1 || age > 100) {
      showAlert("Vui lòng nhập tuổi nguyên từ 1 đến 100.");
      return;
    }

    const bmr =
      gender === "Nam"
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

    const tdee = Math.round(bmr * activity);
    const maintenance = tdee;
    const loss = tdee - 500;
    const gain = tdee + 500;
    const record = {
      age,
      height,
      weight,
      gender,
      bmr: Math.round(bmr),
      tdee,
      date: new Date().toLocaleDateString("vi-VN"),
    };

    bmrValue.textContent = record.bmr + " kcal";
    tdeeValue.textContent = record.tdee + " kcal";
    maintenanceValue.textContent = maintenance + " kcal";
    lossValue.textContent = loss + " kcal";
    gainValue.textContent = gain + " kcal";
    tdeeResult.classList.remove("d-none");
    tdeeEmpty.classList.add("d-none");

    saveTDEE(record);
    localStorage.setItem("latestTDEE", JSON.stringify(record));
  });
}

// Diet module: filter plans based on goal and diet type
function initDiet() {
  const dietCards = document.getElementById("dietCards");
  const dietMessage = document.getElementById("dietMessage");
  const goalSelect = document.getElementById("dietGoal");
  const typeSelect = document.getElementById("dietType");

    const plans = [
      {
        goal: "Giảm cân",
        type: "Ăn kiêng truyền thống",
        breakfast: "Sữa chua Hy Lạp, trái cây",
        snack1: "1 quả táo đỏ",
        lunch: "Salad gà nướng và quinoa",
        snack2: "Một nắm hạt hạnh nhân",
        dinner: "Cá hồi hấp và rau củ",
        calories: 1500,
      },
      {
        goal: "Giảm cân",
        type: "Keto",
        breakfast: "Trứng chiên bơ và sốt kem",
        snack1: "1 miếng phô mai xé",
        lunch: "Bò áp chảo với rau xanh",
        snack2: "1 quả trứng luộc",
        dinner: "Cá ngừ sốt mayo",
        calories: 1400,
      },
      {
        goal: "Giảm cân",
        type: "Thuần chay",
        breakfast: "Cháo yến mạch hạt chia",
        snack1: "1 cốc sữa hạnh nhân",
        lunch: "Đậu phụ xào rau",
        snack2: "Nửa quả bưởi",
        dinner: "Súp lơ cuốn rong biển",
        calories: 1450,
      },
      {
        goal: "Tăng cơ",
        type: "Ăn kiêng truyền thống",
        breakfast: "Bánh mì nguyên cám và trứng",
        snack1: "Sinh tố chuối bơ đậu phộng",
        lunch: "Gà nướng, khoai lang",
        snack2: "Sữa chua và yến mạch",
        dinner: "Cá hồi và cơm gạo lứt",
        calories: 2200,
      },
      {
        goal: "Tăng cơ",
        type: "Keto",
        breakfast: "Trứng và phô mai",
        snack1: "Thịt băm xào phô mai",
        lunch: "Bít tết bơ",
        snack2: "Bơ hạt phỉ",
        dinner: "Tôm xào bơ",
        calories: 2300,
      },
      {
        goal: "Tăng cơ",
        type: "Thuần chay",
        breakfast: "Sinh tố protein",
        snack1: "Salad đậu xanh",
        lunch: "Đậu nành, rau củ",
        snack2: "Hạt macca, óc chó",
        dinner: "Hạt quinoa và bông cải xanh",
        calories: 2150,
      },
      {
        goal: "Giữ dáng",
        type: "Ăn kiêng truyền thống",
        breakfast: "Bánh mì đen và cá hồi",
        snack1: "Sữa chua trái cây",
        lunch: "Salad quinoa",
        snack2: "Bánh quy nguyên cám",
        dinner: "Ức gà xào rau củ",
        calories: 1800,
      },
      {
        goal: "Giữ dáng",
        type: "Keto",
        breakfast: "Bơ và trứng ốp la",
        snack1: "Nước hầm xương",
        lunch: "Salad phô mai",
        snack2: "Dưa chuột chấm mayo",
        dinner: "Gà nướng bơ",
        calories: 1750,
      },
      {
        goal: "Giữ dáng",
        type: "Thuần chay",
        breakfast: "Sữa hạt và ngũ cốc",
        snack1: "Sinh tố rau má",
        lunch: "Buddha bowl",
        snack2: "Bánh đậu xanh nướng",
        dinner: "Mì gạo lứt và rau củ",
        calories: 1850,
      },
    ];

  function renderPlans() {
    const latestBMI = JSON.parse(localStorage.getItem("latestBMI") || "null");
    const latestTDEE = JSON.parse(localStorage.getItem("latestTDEE") || "null");
    if (!latestBMI || !latestTDEE) {
      dietMessage.textContent = "Bạn chưa tính chỉ số BMI hoặc BMR/TDEE.";
      dietMessage.className = "alert alert-warning text-center";
      dietCards.innerHTML = "";
      return;
    }

    dietMessage.textContent = `BMI: ${latestBMI.bmi} — TDEE: ${latestTDEE.tdee} kcal. Chọn kế hoạch phù hợp.`;
    dietMessage.className = "alert alert-info text-center";

    const goal = goalSelect.value;
    const type = typeSelect.value;
    const filtered = plans.filter(
      (plan) => plan.goal === goal && plan.type === type,
    );

    if (!filtered.length) {
      dietCards.innerHTML =
        '<p class="text-center text-muted">Không tìm thấy kế hoạch phù hợp. Hãy thử lựa chọn khác.</p>';
      return;
    }

    dietCards.innerHTML = filtered
      .map(
        (plan) => `
      <div class="col-12">
        <article class="card shadow-sm border-0 h-100 p-4">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h4 class="card-title fw-bold text-primary mb-1">${plan.goal} — ${plan.type}</h4>
              <p class="text-secondary mb-0">Lộ trình ăn uống tiêu chuẩn trong ngày</p>
            </div>
            <span class="badge bg-primary fs-6 px-3 py-2 rounded-pill">${plan.calories} kcal/ngày</span>
          </div>
          
          <div class="timeline-container mt-2 bg-light rounded-4">
            <!-- Sáng 7h -->
            <div class="timeline-step">
              <div class="timeline-time">07:00</div>
              <div class="timeline-icon">🥣</div>
              <div class="timeline-name">Bữa sáng</div>
              <div class="timeline-desc" title="${plan.breakfast}">${plan.breakfast}</div>
            </div>
            <!-- Snack 10h -->
            <div class="timeline-step">
              <div class="timeline-time">10:00</div>
              <div class="timeline-icon">🍎</div>
              <div class="timeline-name">Snack</div>
              <div class="timeline-desc" title="${plan.snack1}">${plan.snack1}</div>
            </div>
            <!-- Trưa 12h -->
            <div class="timeline-step">
              <div class="timeline-time">12:00</div>
              <div class="timeline-icon">🥗</div>
              <div class="timeline-name">Bữa trưa</div>
              <div class="timeline-desc" title="${plan.lunch}">${plan.lunch}</div>
            </div>
            <!-- Snack 15h -->
            <div class="timeline-step">
              <div class="timeline-time">15:00</div>
              <div class="timeline-icon">🥤</div>
              <div class="timeline-name">Snack</div>
              <div class="timeline-desc" title="${plan.snack2}">${plan.snack2}</div>
            </div>
            <!-- Tối 18h -->
            <div class="timeline-step">
              <div class="timeline-time">18:00</div>
              <div class="timeline-icon">🍲</div>
              <div class="timeline-name">Bữa tối</div>
              <div class="timeline-desc" title="${plan.dinner}">${plan.dinner}</div>
            </div>
          </div>
        </article>
      </div>`,
      )
      .join("");
  }

  goalSelect.addEventListener("change", renderPlans);
  typeSelect.addEventListener("change", renderPlans);

  renderPlans();
}

// Workout module: timer, toast, and completion sound
function initWorkout() {
  const timerValue = document.getElementById("timerValue");
  const startButton = document.getElementById("timerStart");
  const pauseButton = document.getElementById("timerPause");
  const resetButton = document.getElementById("timerReset");
  const toastElement = document.getElementById("workoutToast");
  const toast = new bootstrap.Toast(toastElement);

  let duration = 300;
  let remaining = duration;
  let intervalId = null;

  function formatTime(seconds) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${minutes}:${secs}`;
  }

  function updateDisplay() {
    timerValue.textContent = formatTime(remaining);
  }

  function playBeep() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = "sine";
      oscillator.frequency.value = 880;
      gainNode.gain.value = 0.15;
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.25);
    } catch (error) {
      console.warn("Audio không khả dụng", error);
    }
  }

  function startTimer() {
    if (intervalId) return;
    intervalId = setInterval(() => {
      remaining -= 1;
      updateDisplay();
      if (remaining <= 0) {
        clearInterval(intervalId);
        intervalId = null;
        playBeep();
        toast.show();
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function resetTimer() {
    pauseTimer();
    remaining = duration;
    updateDisplay();
  }

  startButton.addEventListener("click", startTimer);
  pauseButton.addEventListener("click", pauseTimer);
  resetButton.addEventListener("click", resetTimer);
  updateDisplay();
}

// Water tracker module: click cups and save progress
function initWaterTracker() {
  const cupButtons = document.querySelectorAll(".cup-btn");
  const waterPercent = document.getElementById("waterPercent");
  const waterText = document.getElementById("waterText");
  const waterProgress = document.getElementById("waterProgress");
  const waterFill = document.getElementById("waterFill");
  const dailyGoal = 2000;

  function getWaterIntake() {
    return Number(localStorage.getItem("waterIntake") || "0");
  }

  function updateWaterDisplay() {
    const amount = getWaterIntake();
    const percent = Math.min(100, Math.round((amount / dailyGoal) * 100));
    waterPercent.textContent = `${percent}%`;
    waterText.textContent = `Bạn đã uống được ${percent}% mục tiêu hôm nay`;
    waterProgress.style.width = `${percent}%`;
    waterFill.style.height = `${percent}%`;
  }

  cupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const add = Number(button.dataset.amount);
      const amount = getWaterIntake() + add;
      localStorage.setItem("waterIntake", Math.min(amount, dailyGoal));
      updateWaterDisplay();
    });
  });

  updateWaterDisplay();
}

// History module: load records, build charts, delete entries
function initHistory() {
  const tableBody = document.getElementById("historyTableBody");
  const clearHistoryBtn = document.getElementById("clearHistoryBtn");
  const confirmModal = new bootstrap.Modal(
    document.getElementById("confirmModal"),
  );
  const confirmDeleteBtn = document.getElementById("confirmDeleteBtn");
  let deleteTarget = null;

  function getHistory() {
    return JSON.parse(localStorage.getItem("healthHistory") || "[]");
  }

  function saveHistory(history) {
    localStorage.setItem("healthHistory", JSON.stringify(history));
  }

  function renderTable() {
    const history = getHistory();
    const rows = history
      .map(
        (record, index) => `
      <tr>
        <td>${record.date}</td>
        <td>${record.weight || "-"}</td>
        <td>${record.bmi || "-"}</td>
        <td>${record.tdee || "-"}</td>
        <td><button class="btn btn-sm btn-outline-danger delete-row" data-index="${index}">Xóa</button></td>
      </tr>`,
      )
      .join("");
    tableBody.innerHTML =
      rows ||
      '<tr><td colspan="5" class="text-center text-muted">Chưa có dữ liệu lịch sử.</td></tr>';
  }

  function buildCharts() {
    const history = getHistory();
    const filtered = history.filter((item) => item.weight && item.bmi);
    const labels = filtered.map((record) => record.date);
    const weightData = filtered.map((record) => record.weight);
    const bmiData = filtered.map((record) => record.bmi);

    const weightCtx = document.getElementById("weightChart");
    const bmiCtx = document.getElementById("bmiChart");

    if (window.weightChart) window.weightChart.destroy();
    if (window.bmiChart) window.bmiChart.destroy();

    window.weightChart = new Chart(weightCtx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Cân nặng (kg)",
            data: weightData,
            borderColor: "#0D6EFD",
            backgroundColor: "rgba(13, 110, 253, 0.16)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
      },
    });

    window.bmiChart = new Chart(bmiCtx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "BMI",
            data: bmiData,
            borderColor: "#198754",
            backgroundColor: "rgba(25, 135, 84, 0.16)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
      },
    });
  }

  function refreshHistory() {
    renderTable();
    buildCharts();
  }

  tableBody.addEventListener("click", (event) => {
    const button = event.target.closest(".delete-row");
    if (!button) return;
    deleteTarget = Number(button.dataset.index);
    document.getElementById("confirmModalBody").textContent =
      "Bạn có chắc muốn xóa mục lịch sử này?";
    confirmModal.show();
  });

  confirmDeleteBtn.addEventListener("click", () => {
    const history = getHistory();
    if (deleteTarget === "all") {
      saveHistory([]);
    } else if (deleteTarget !== null) {
      history.splice(deleteTarget, 1);
      saveHistory(history);
    }
    deleteTarget = null;
    confirmModal.hide();
    refreshHistory();
  });

  clearHistoryBtn.addEventListener("click", () => {
    deleteTarget = "all";
    document.getElementById("confirmModalBody").textContent =
      "Bạn có chắc muốn xóa tất cả lịch sử không?";
    confirmModal.show();
  });

  refreshHistory();
}

// Contact module: validate form and show toast
function initContact() {
  const contactForm = document.getElementById("contactForm");
  const contactToastEl = document.getElementById("contactToast");
  const contactToast = new bootstrap.Toast(contactToastEl);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name) {
      alert("Vui lòng nhập họ và tên.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("Vui lòng nhập email hợp lệ.");
      return;
    }
    if (message.length < 10) {
      alert("Nội dung góp ý phải nhiều hơn 10 ký tự.");
      return;
    }

    contactToast.show();
    contactForm.reset();
  });
}

// Initialize all modules conditionally
function initApp() {
  initNavigation();

  if (document.body.dataset.page === "home") {
    initHome();
  }
  if (document.getElementById("bmiForm")) {
    initBMI();
  }
  if (document.getElementById("tdeeForm")) {
    initTDEE();
  }
  if (document.getElementById("dietCards")) {
    initDiet();
  }
  if (document.getElementById("timerValue")) {
    initWorkout();
  }
  if (document.querySelector(".cup-btn")) {
    initWaterTracker();
  }
  if (document.getElementById("historyTableBody")) {
    initHistory();
  }
  if (document.getElementById("contactForm")) {
    initContact();
  }
}

window.addEventListener("DOMContentLoaded", initApp);
