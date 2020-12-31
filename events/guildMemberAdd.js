module.exports = (client, member) => {
  if (member.guild.id !== "663370560696221698") return;
  let role = member.guild.roles.cache.get("688464703961301280");
  member.roles.add(role).catch(console.error);
};
