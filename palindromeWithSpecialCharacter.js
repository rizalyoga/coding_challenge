const kalimat1 = "Ka&8 123Su12[]]\rr u2sa!k";
const kalimat2 = "ka[[!@# T-=+&^ A8237k";

const filterString = (string) => {
  const newString = string.replace(/[^a-zA-Z]/g, "");

  if (
    newString.toLowerCase() ==
    newString.split("").reverse().join("").toLowerCase()
  ) {
    console.log("palindrome");
  } else {
    console.log("not palindrome");
  }
};

filterString(kalimat1);
