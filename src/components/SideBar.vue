<template>
<div>
    <div id="title">
        <h3>Click Contact Us Button to Slide In Contact Form</h3>
    </div>
    <!-- Sliding div starts here -->
    <div id="slider" style="right:-342px;">
    <div id="sidebar" onclick="open_panel()"><img src="images/contact.png"></div>
    <div id="header">
        <h2>Contact Form</h2>
        <p>This is my form.Please fill it out.It's awesome!</p>
        <input name="dname" type="text" value="Your Name">
        <input name="demail" type="text" value="Your Email">
        <h4>Query type</h4>
        <select>
            <option>General Query</option>
            <option>Presales</option>
            <option>Technical</option>
            <option>Others</option>
        </select>
        <textarea>Message</textarea>
        <button>Send Message</button>
    </div>
</div>

</div>
<!-- Sliding div ends here -->
</template>

<script>
export default {};
</script>

<style lang=scss scoped>
@import "../assets/styles/variables.scss";

#sidebar {
    background-color: $light-pink;
    position: fixed;
    top: 40px;
    left: 0;
    transition-duration: 0.3s;
}
#sidebar-content {
    position: fixed;
    top: 40px;
    left: -250px;
    transition-duration: 0.5s;
}
#sidebar:hover {
    left: 250px;
}
#sidebar:hover #sidebar-content {
    left: 0;
}

.tab {
    transform: rotate(90deg);
}
</style>
