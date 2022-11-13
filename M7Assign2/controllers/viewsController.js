

exports.getLandingPAge = async (req, res) => {
  res.status(200).render('overview', {
    title: `Over View`
  
  });
};

exports.getLoans = async (req, res) => {
  res.status(200).render('allLoans', {
    title: `Get Loans`
  });
};

exports.createnewLoan = async (req, res) => {
  res.status(200).render('newLoan', {
    title: `Create New Loans`
  });
};

exports.getSignInForm = (req, res) => {
  res.status(200).render('signip', {
    title: 'Sign in New User'
  });
};
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

exports.getLoginUser = (req, res) => {
  const {email, password} = req.body;
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

