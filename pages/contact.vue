<template>
  <div class="pb-10">
    <h1 class="title mb-5">Contact</h1>
    <h2 class="mb-7">
      To reach me, you can try messaging on one of my
      <SimpleLink to="/social">socials</SimpleLink> or fill out this form below.
    </h2>
    <div class="max-w-3xl">
      <FormKit type="form" netlify @submit="submit" name="contact2">
        <FormKit type="hidden" name="form-name" value="contact2" />
        <FormKit
          type="text"
          name="name"
          validation="required"
          label="Name"
          placeholder="John Doe"
        />
        <FormKit
          type="email"
          name="email"
          validation="required|email"
          label="Email"
          placeholder="email@example.com"
        />
        <FormKit
          type="textarea"
          name="message"
          validation="required"
          label="Message"
          placeholder="Hey, Cyrus! Just ran across your website and I love your work. I just wanted to reach to you about your car's extended warranty."
        />
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Contact",
});

useServerSeoMeta({
  description: "Contact Cyrus Yip though this form.",
});

function submit(data: Record<string, string>) {
  console.log(new URLSearchParams(data).toString());
  fetch("/netlifyformdontgohere.html", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      const button = document.querySelector(
        "[type=submit]"
      ) as HTMLButtonElement;
      button.textContent = "Submitted!";
      button.disabled = true;
    })
    .catch((error) => alert(error));
}
</script>
