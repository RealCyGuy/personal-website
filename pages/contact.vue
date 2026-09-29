<template>
  <div class="auto-mx">
    <h1 class="title mb-5">Contact</h1>
    <h2 class="mb-7">
      To reach me, you can email me at
      <SimpleLink to="mailto:cyrusyip@cyrusyip.com"
        >cyrusyip@cyrusyip.com</SimpleLink
      >
      or try messaging on one of my
      <SimpleLink to="/social">socials</SimpleLink> or fill out this form below!
    </h2>
    <div class="max-w-3xl">
      <FormKit type="form" @submit="submit">
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

const description =
  "Contact Cyrus Yip though this custom form! (or use something else)";

useSeoMeta({ description });
defineOgImage("Custom", { description });

async function submit(data: Record<string, string>) {
  try {
    const response = await fetch("https://formspree.io/f/myezlpve", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      const errorMessage =
        result?.errors?.map((e: { message: string }) => e.message).join(", ") ||
        response.statusText;
      alert("Form submission failed!\n" + errorMessage);
      return;
    }

    const button = document.querySelector("[type=submit]") as HTMLButtonElement;
    if (button) {
      button.textContent = "Submitted!";
      button.disabled = true;
    }
  } catch (error) {
    alert(error);
  }
}

onMounted(handleAnimation);
</script>
