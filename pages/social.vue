<template>
  <div>
    <h1 class="mb-5">Social</h1>
    <h2 class="mb-7">Here are some links. Categories: <SimpleLink to="#developer_things">developer things</SimpleLink>,
      <SimpleLink to="#interests">interests</SimpleLink>, <SimpleLink to="#social_media">social media</SimpleLink>.
    </h2>
    <SocialSection title="Developer things">
      <SocialLink to="https://github.com/realcyguy" title="GitHub" username="RealCyGuy" icon="github" prefix="@" />
      <SocialLink to="https://gitlab.com/realcyguy" title="GitLab" username="RealCyGuy" icon="gitlab" prefix="@" />
      <SocialLink to="https://g.dev/cyrus" title="Google Developers" username="cyrus" icon="googledevelopers" />
      <SocialLink to="https://stackoverflow.com/users/13683643/cyrus" title="Stack Overflow" username="Cyrus"
        icon="stackoverflow" />
      <SocialLink to="https://realcyguy.itch.io" title="Itch.io" username="realcyguy" icon="itchio" />
      <SocialLink to="https://pypi.org/user/realcyguy" title="PyPI" username="realcyguy" icon="pypi" />
      <SocialLink to="https://www.npmjs.com/~realcyguy" title="npm" username="realcyguy" icon="npm" prefix="~" />
      <SocialLink to="https://codepen.io/realcyguy" title="CodePen" username="realcyguy" icon="codepen" prefix="@" />
    </SocialSection>
    <SocialSection title="Interests">
      <SocialLink to="https://lichess.org/@/realcyguy" title="Lichess" username="realcyguy" icon="lichess" prefix="@" />
      <SocialLink to="https://www.chess.com/member/realcyguy" title="Chess.com" username="realcyguy" icon="chesscom"
        prefix="@" />
      <SocialLink to="https://monkeytype.com/profile/realcyguy" title="Monkeytype" username="realcyguy"
        icon="monkeytype" />
    </SocialSection>
    <SocialSection title="Social media">
      <SocialLink to="https://www.youtube.com/@cy_" title="Youtube" username="cy_" icon="youtube" prefix="@" />
      <SocialLink to="https://tiktok.com/@realcyguy" title="TikTok" username="realcyguy" icon="tiktok" prefix="@" />
      <SocialLink to="https://discord.com/users/543225108135673877 
" title="Discord" username="RealCyGuy#1919" icon="discord" prefix="@" />
    </SocialSection>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Social"
});
</script>
