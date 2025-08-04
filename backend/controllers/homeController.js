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

export const getAboutPage = (req, res) => {
  try {
    const data = {
      title: 'About Us - CodeNinjas Training'
    };
    // The 'about' string refers to 'about.ejs' in the views folder
    res.render('about', data);
  } catch (error) {
    console.error('Error rendering about page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getContactPage = (req, res) => {
  try {
    const data = {
      title: 'Contact Us - CodeNinjas Training'
    };
    // The 'contact' string refers to 'contact.ejs' in the views folder
    res.render('contact', data);
  } catch (error) {
    console.error('Error rendering contact page:', error);
    res.status(500).send('Error loading the page.');
  }
};
