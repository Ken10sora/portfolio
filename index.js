"use strict";

const number = document.querySelector("html").number;

if (number === "1") {
    document.querySelector(
        'option[value="index.html"]'
    ).selected = true;
} else if (number === "2") {
    document.querySelector(
        'option[value="index-v2.html"]'
    ).selected = true;
} else if (number === "3") {
    document.querySelector(
        'option[value="index-v3.html"]'
    ).selected = true;
}

document.getElementById("form").select.onchange = function () {
    location.href =
        document.getElementById("form").select.value;
};