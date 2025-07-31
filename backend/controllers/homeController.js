export const getHomePage = (req, res) => {
  try {
    const data = {
      title: 'CodeNinjas Training - Transform Your Career',
       description: 'Join CodeNinjas Training to master cutting-edge technologies with industry experts. Get job-ready skills, hands-on experience, and placement assistance.'
    };
    // The 'index' string refers to 'index.ejs' in the views folder
    res.render('index', data);
  } catch (error) {
    console.error('Error rendering homepage:', error);
    res.status(500).send('Error loading the page.');
  }
};