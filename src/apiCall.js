const getData = async (setData, setLoading) => {
    try {
      let response = await fetch(
        'https://reqres.in/api/users?page=2'
      );
      let json = await response.json();
      setData(json)
      return setLoading(false);

    } catch (error) {
       console.error(error);
    }
  };

  export default getData;