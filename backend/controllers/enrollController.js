export const getEnrollmentPage = (req, res) => {
  try {
    const { category, course } = req.params;

    const courseNameMap = {
      'data-science-using-python': 'Data Science Using Python',
      'python-programming': 'Python Programming',
      'artificial-intelligence': 'Artificial Intelligence',
      'web-development': 'Web Development',
      'java-programming': 'Java Programming',
      'stock-market': 'Stock Market',
      'finance': 'Finance',
      'human-resources': 'Human Resources'
    };

    const courseName = courseNameMap[course] || 'Selected Course';

    const data = {
      title: `Enroll in ${courseName} - CodeNinjas`,
      description: `Enroll in our ${courseName} course today and take the next step in your career journey.`,
      courseName: courseName,
      course: course, // Pass the slug for the back link
      category: category // Pass the category for the back link
    };
    
    res.render('enroll', data);
  } catch (error) {
    console.error('Error rendering enrollment page:', error);
    res.status(500).send('Error loading the page.');
  }
};
