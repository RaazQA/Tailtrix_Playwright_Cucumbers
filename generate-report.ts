import * as fs from 'fs';
import * as path from 'path';
import cucumberHtmlReporter from 'cucumber-html-reporter';

const reportFile = path.join(__dirname, 'reports', 'report.json');
const outputHtmlFile = path.join(__dirname, 'reports', 'cucumber-report.html');

if (fs.existsSync(reportFile)) {
  const options: any = {
    theme: 'bootstrap',
    jsonFile: reportFile,
    output: outputHtmlFile,
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
      'App Version': '1.0.0',
      'Test Environment': 'Local',
      'Browser': 'Chrome',
      'Platform': 'Windows 10',
      'Parallel': 'Scenarios',
      'Executed': 'Remote',
    },
  };

  cucumberHtmlReporter.generate(options, () => {
    console.log(`Cucumber HTML report generated at: ${outputHtmlFile}`);
  });
} else {
  console.error('Cucumber JSON report not found. Please run your tests first.');
}
