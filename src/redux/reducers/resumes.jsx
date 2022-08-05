const resumes = (resumes = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return resumes;

    case 'CREATE':
      return [...resumes, action.payload];

    default:
      return resumes;
  }
};

export default resumes;
