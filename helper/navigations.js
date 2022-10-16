export const pathsByNav = {
  "explore": [
    "/browse",
    "/mysnippets",
    "/create",
  ],
  "sign-up": [ "/register" ],
  "login": ["/login" ],
  "home": [ "/"],
}

export const getNavByPath = pathName => {
  const nav = Object.keys(pathsByNav)
    .find(name => pathsByNav[name].some(path => path === pathName));
  return nav || 'home';
}

export const getPathByNav = nav => pathsByNav[nav]?.[0] || '/';
