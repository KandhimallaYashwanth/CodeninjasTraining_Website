export const getCoursesPage = (req, res) => {
  try {
    const data = {
      title: 'Our Courses - CodeNinjas Training',
      description: 'Explore our wide range of tech and management courses, designed by industry experts to equip you with the skills for tomorrow\'s challenges.'
    };
    // This renders the 'courses.ejs' file
    res.render('courses', data);
  } catch (error) {
    console.error('Error rendering courses page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getDataSciencePage = (req, res) => {
  try {
    const data = {
      title: 'Data Science Using Python Course - CodeNinjas Training',
      description: 'Unlock your potential with our expert-led data science using python program. This comprehensive course covers Python, Pandas, Matplotlib, and Scikit-learn.'
    };
    // This renders the new ejs file
    res.render('tech_courses/data-science', data);
  } catch (error) {
    console.error('Error rendering data science page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getPythonPage = (req, res) => {
  try {
    const data = {
      title: 'Python Programming Course - CodeNinjas Training',
      description: 'Start your coding journey with our Python Programming course. Learn Python from scratch, understand its fundamental concepts, and build practical applications.'
    };
    // This renders the new ejs file
    res.render('tech_courses/python-programming', data);
  } catch (error) {
    console.error('Error rendering python programming page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getAIPage = (req, res) => {
  try {
    const data = {
      title: 'Artificial Intelligence Course - CodeNinjas Training',
      description: 'Explore the fascinating world of Artificial Intelligence. This advanced course covers machine learning, deep learning, natural language processing, and computer vision. Includes hands-on projects using TensorFlow and Keras.'
    };
    // This renders the new ejs file
    res.render('tech_courses/ai-course', data);
  } catch (error) {
    console.error('Error rendering artificial intelligence page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getWebDevPage = (req, res) => {
  try {
    const data = {
      title: 'Web Development Course - CodeNinjas Training',
      description: 'Become a full-stack web developer with our comprehensive MERN stack course. Learn to build dynamic, data-driven web applications using MongoDB, Express, React, and Node.js.'
    };
    // This renders the new ejs file
    res.render('tech_courses/web-dev-course', data);
  } catch (error) {
    console.error('Error rendering web development page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getJavaPage = (req, res) => {
  try {
    const data = {
      title: 'Core Java Programming Course - CodeNinjas Training',
      description: 'Master the fundamentals of Java, one of the most popular and in-demand programming languages for enterprise applications and Android development.'
    };
    res.render('tech_courses/java-course', data);
  } catch (error) {
    console.error('Error rendering Java Programming page:', error);
    res.status(500).send('Error loading the page.');
  }
};


export const getStockMarketPage = (req, res) => {
  try {
    const data = {
      title: 'Stock Market Trading for Beginners - CodeNinjas Training',
      description: 'Learn to navigate the stock market with confidence. This course covers fundamental and technical analysis, risk management, and trading strategies.'
    };
    res.render('management_courses/stock-market', data);
  } catch (error) {
    console.error('Error rendering Stock Market page:', error);
    res.status(500).send('Error loading the page.');
  }
};


export const getFinancePage = (req, res) => {
  try {
    const data = {
      title: 'Financial Management Course - CodeNinjas Training',
      description: 'Gain essential financial literacy with our course on key concepts for business and personal growth, including budgeting, investing, and financial analysis.'
    };
    res.render('management_courses/finance', data);
  } catch (error) {
    console.error('Error rendering Finance page:', error);
    res.status(500).send('Error loading the page.');
  }
};


export const getHumanResourcesPage = (req, res) => {
  try {
    const data = {
      title: 'Human Resources (HR) Management Course - CodeNinjas Training',
      description: 'Develop comprehensive HR management skills. This course covers talent acquisition, employee relations, compliance, and strategic HR practices.'
    };
    res.render('management_courses/human-resources', data);
  } catch (error) {
    console.error('Error rendering Human Resources page:', error);
    res.status(500).send('Error loading the page.');
  }
};
