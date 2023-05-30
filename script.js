function loadProfile() {
    window.fetch(new Request('./tanykazy/README.md'))
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.text();
        })
        .then((data) => {
            document.getElementById('content').innerHTML = marked.parse(data);
        });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadProfile);
} else {
    loadProfile();
}
