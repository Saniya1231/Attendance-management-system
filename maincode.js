 function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("collapsed");
        }

        function toggleDropdown(event, id) {
            event.stopPropagation();
            document.querySelectorAll('.dropdown-box').forEach(box => {
                if (box.id !== id) box.classList.remove('active');
            });
            document.getElementById(id).classList.toggle("active");
        }

        function closeDropdowns(event) {
            if (!event.target.closest('.menu-item')) {
                document.querySelectorAll('.dropdown-box').forEach(box => box.classList.remove('active'));
            }
        }

        function switchContent(page) {
            document.getElementById("content").innerHTML = `<h2 class="text-2xl font-bold">${page}</h2><p>Content for ${page}</p>`;
            closeDropdowns();
        }
    function switchContent(page) {
    document.getElementById("content").innerHTML = `<iframe src="${page}" style="width:100%; height:100vh; border:none;"></iframe>`;
}
function switchContent(page) {
    let content = document.getElementById("content");

    if (page === "dashboard" || page === "loading") {
        // Keep Announcements and Assignments only for Dashboard and Loading pages
        content.innerHTML = `
            <h2 class="text-2xl font-bold">🏠 ${page.charAt(0).toUpperCase() + page.slice(1)}</h2>
            <p>Welcome to  ${page}!</p>

            <!-- Announcements Section -->
            <div class="section">
                <h2>📢 Announcements</h2>
                <textarea class="textarea" placeholder="Write your announcement here..."></textarea>
                <button class="button mt-2">Upload</button>
            </div>

            <!-- Assignments Section -->
            <div class="section">
                <h2>📚 Assignments</h2>
                <textarea class="textarea" placeholder="Write your assignment here..."></textarea>
                <button class="button mt-2">Post</button>
            </div>
        `;
    } else {
        // Load other pages dynamically without Announcements and Assignments sections
        content.innerHTML = `<iframe src="${page}" style="width:100%; height:90vh; border:none;"></iframe>`;
    }

    closeDropdowns();
}