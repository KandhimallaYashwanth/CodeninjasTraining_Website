export const getServicePage = (req, res) => {
  try {
    const data = {
      title: 'Our Services | CodeNinjas Training',
      description: 'Explore our comprehensive suite of IT services, from custom software development to strategic IT consulting.'
    };
    res.render('Service', data);
  } catch (error) {
    console.error('Error rendering services page:', error);
    res.status(500).send('Error loading the page.');
  }
};


export const getCustomSoftwarePage = (req, res) => {
  try {
    const data = {
      title: 'Custom Software Development | CodeNinjas Training',
      description: 'Get tailored software solutions designed to meet your unique business needs. Our expert team builds scalable and efficient applications from the ground up.'
    };
    res.render('services/custom_software_development', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getWebAndAppPage = (req, res) => {
  try {
    const data = {
      title: 'Web and App Development | CodeNinjas Training',
      description: 'We build modern, responsive web and mobile applications designed to engage your audience and grow your business.'
    };
    res.render('services/web_and_app_development', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getSupportPage = (req, res) => {
  try {
    const data = {
      title: 'Software Support and Maintenance | CodeNinjas Training',
      description: 'Our reliable support and maintenance services ensure your software runs smoothly and efficiently, minimizing downtime.'
    };
    res.render('services/software_support_and_maintenance', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getConsultingPage = (req, res) => {
  try {
    const data = {
      title: 'IT Consulting & System Integration | CodeNinjas Training',
      description: 'Leverage our strategic IT advice and seamless integration services to boost your business efficiency and productivity.'
    };
    res.render('services/it_consulting_and_system_integration', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getMonitoringPage = (req, res) => {
  try {
    const data = {
      title: 'Application Monitoring & Optimization | CodeNinjas Training',
      description: 'Proactive performance monitoring and fine-tuning for your applications to ensure optimal performance and user experience.'
    };
    res.render('services/application_monitoring_and_optimization', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getModernizationPage = (req, res) => {
  try {
    const data = {
      title: 'Legacy Software Modernization | CodeNinjas Training',
      description: 'Revamp and upgrade your outdated systems to meet modern technology standards, improving performance and security.'
    };
    res.render('services/legacy_software_modernization', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getApiDevelopmentPage = (req, res) => {
  try {
    const data = {
      title: 'API Development and Integration | CodeNinjas Training',
      description: 'We build custom APIs and handle seamless third-party integrations to connect your software ecosystem.'
    };
    res.render('services/api_development_and_integration', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};

export const getDataMigrationPage = (req, res) => {
  try {
    const data = {
      title: 'Data Migration & Backup Services | CodeNinjas Training',
      description: 'Securely migrate your data and implement reliable backup solutions to protect your valuable business information.'
    };
    res.render('services/data_migration_and_backup_services', data);
  } catch (error) {
    console.error('Error rendering page:', error);
    res.status(500).send('Error loading the page.');
  }
};
