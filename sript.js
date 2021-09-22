const btn = document.getElementById("share");
const h1 = document.getElementById("header");

btn.addEventListener("click", async () => {
  const image = await fetch("broadwayboogiewoogie.jpg");

  console.log(image);

  const blob = await image.blob();

  console.log(blob);

  const file = new File([blob], "broadway.jpg", { type: "image/jpeg " });

  console.log(file);

  const shareData = {
    title: "Broadway Boogie Woogie",
    text: "Piet Mondrian's excellent painting!",
    //files: [file],
  };

  try {
    await navigator.share(shareData);
    h1.innerText = "Yes";
  } catch (e) {
    h1.innerText = e;
  }
});
