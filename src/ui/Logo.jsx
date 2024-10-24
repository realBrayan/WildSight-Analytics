function Logo({ w = 32 }) {
  return (
    <img
      // i know its ugly but chill out. we will fix it later

      //src="https://img.logoipsum.com/243.svg"
      //src="https://cdn.discordapp.com/attachments/1286414552145199145/1298499315160842352/Screen_Shot_2024-10-22_at_4.png?ex=671a71f9&is=67192079&hm=5e41a176effa559e7d18bd2600db87d290ce1b7347f8c257d45ae280f505c51a&"
      //src="../images/WildSightLogoBlack.png"
      src="/WildSightLogoBlack.png"
      className={`overflow-hidden transition-all w-${w}`}
      alt="Logo"
    />
  );
}

export default Logo;
