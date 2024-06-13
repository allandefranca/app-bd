export function generateAvatarUrl() {
    const genders = ["men", "women"];
    const selectedGender = genders[Math.floor(Math.random() * genders.length)];
    const imageNumber = Math.floor(Math.random() * 99) + 1;
    const imageUrl = `https://randomuser.me/api/portraits/${selectedGender}/${imageNumber}.jpg`;

    return imageUrl;
}
