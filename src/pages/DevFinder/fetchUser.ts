const fetchUser = async (username: string) =>
  fetch(`https://api.github.com/users/${username}`).then(
    (successResponse) => {
      if (successResponse.status !== 200) {
        return null;
      } else {
        return successResponse.json();
      }
    },
    (failResponse) => {
      return null;
    }
  );

export default fetchUser;
