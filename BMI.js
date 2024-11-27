document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();
    let age = parseInt(document.getElementById('age').value);
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);

    if (!age || !gender || !height || !weight) {
        document.getElementById('bmi-result').innerText = "សូមបំពេញព័ត៌មានទាំងអស់!";
        return;
    }

    let bmi = calculateBMI(weight, height);
    let category = getBMICategory(bmi);

    document.getElementById('bmi-result').innerHTML = `
        អាយុ: ${age}, ភេទ: ${gender} <br>
        កម្ពស់: ${height} ម៉ែត្រ, ទម្ងន់: ${weight} គីឡូក្រាម<br>
        BMI: ${bmi.toFixed(1)} (${category})
    `;
});

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMICategory(bmi) {
    if (bmi < 16) {
        return "ស្គមខ្លាំង";
    } else if (bmi >= 16 && bmi < 17) {
        return "ស្គមមធ្យម";
    } else if (bmi >= 17 && bmi < 18.5) {
        return "ស្គមស្រាល";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "ធម្មតា";
    } else if (bmi >= 25 && bmi < 30) {
        return "លើសទម្ងន់";
    } else if (bmi >= 30 && bmi < 35) {
        return "ធាត់កម្រិត I";
    } else if (bmi >= 35 && bmi < 40) {
        return "ធាត់កម្រិត II";
    } else {
        return "ធាត់កម្រិត III";
    }
}

function clearForm() {
    document.getElementById('bmi-form').reset();
    document.getElementById('bmi-result').innerText = "";
}

function showTab(tab) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach((t) => t.classList.remove('active'));
    buttons.forEach((b) => b.classList.remove('active'));

    document.getElementById(tab).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tab}')"]`).classList.add('active');
}

function clearForm() {
    document.getElementById('bmi-form').reset();
    document.getElementById('bmi-result').innerText = "";
}

function showTab(tab) {
    const tabs = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');

    tabs.forEach((t) => t.classList.remove('active'));
    buttons.forEach((b) => b.classList.remove('active'));

    document.getElementById(tab).classList.add('active');
    document.querySelector(`.tab-button[onclick="showTab('${tab}')"]`).classList.add('active');
}
