import React, { useState } from 'react';
// import { AlertCircle } from 'lucide-react';
// import { Alert, AlertDescription } from '@/components/ui/alert';
import { Combobox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';


const QuestionPaperUploadForm = () => {
  const [selectedGrade, setSelectedGrade] = useState('');
  const [selectedMissedReports, setSelectedMissedReports] = useState(null);
  const missedReports = [true, false];
  const sections = ['A', 'B', 'C', 'D']; // Example section options
  const [selectedSection, setSelectedSection] = useState(null);
  const grade = selectedGrade ? `Grade: ${selectedGrade}` : '';
    const section = selectedSection ? `Section: ${selectedSection}` : '';
    const missedReport = selectedMissedReports !== null 
      ? `Missed Reports: ${selectedMissedReports ? 'True' : 'False'}` 
      : '';
  const grades = Array.from({ length: 10 }, (_, i) => i + 1);
  const [formData, setFormData] = useState({
    academicYear: '2024-2025',
    testName: '',
    examType: '',
    stream: '',
    class: '',
    courseType: '',
    file: null
  });
  const [errors, setErrors] = useState({});
  const toggleOptions = () => {
    setIsOpen((prev) => !prev);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      file: e.target.files[0]
    }));
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.testName.trim()) errors.testName = "Test Name is required";
    if (!formData.examType) errors.examType = "Exam Type is required";
    if (!formData.stream) errors.stream = "Stream is required";
    if (!formData.class) errors.class = "Class is required";
    if (!formData.courseType) errors.courseType = "Course Type is required";
    if (!formData.file) errors.file = "Please upload a file";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted", formData);
      // Here you would typically send the data to your backend
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-2 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Report Card Generation</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <label className="text-xs font-medium text-gray-700 w-full md:w-40">Academic Year</label>
            <input
              type="text"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleInputChange}
              className="p-2 w-full md:w-64 border rounded-md"
              disabled
            />
          </div>
        {/* Grade Combobox */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
        <label className="text-xs font-medium text-gray-700 w-full md:w-40">
          Grade
        </label>
        <Combobox value={selectedGrade} onChange={setSelectedGrade}>
          <div className="relative w-full md:w-64">
            <div className="relative">
              <Combobox.Input
                className="p-2 w-full border rounded-md"
                placeholder="Select a grade"
                value={selectedGrade || ''} // Pass selected value to the input field
                readOnly // Make the input read-only since the value is selected from the dropdown
              />
              <Combobox.Button className="absolute inset-y-0 right-0  mr-2">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Combobox.Options className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1 z-10">
              {grades.map((grade) => (
                <Combobox.Option
                  key={grade}
                  value={grade}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-3 pr-4 ${
                      active ? 'bg-blue-600 text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {grade}
                    </span>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>

    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
        <label className="text-xs font-medium text-gray-700 w-full md:w-40">
          Section
        </label>
        <Combobox value={selectedSection} onChange={setSelectedSection}>
          <div className="relative w-full md:w-64">
            <div className="relative">
              <Combobox.Input
                className="p-2 w-full border rounded-md"
                placeholder="Select a section"
              />
              <Combobox.Button className="absolute inset-y-0 right-0  mr-2">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Combobox.Options className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1 z-10">
              {sections.map((section) => (
                <Combobox.Option
                  key={section}
                  value={section}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-3 pr-4 ${
                      active ? 'bg-blue-600 text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {section}
                    </span>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
      {/* Missed Reports Combobox */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
        <label className="text-xs font-medium text-gray-700 w-full md:w-40">
          Missed Reports
        </label>
        <Combobox value={selectedMissedReports} onChange={setSelectedMissedReports}>
          <div className="relative w-full md:w-64">
            <div className="relative">
              <Combobox.Input
                className="p-2 w-full border rounded-md"
                placeholder="Select true or false"
                value={selectedMissedReports === null ? '' : selectedMissedReports.toString()} // Display selected value
                readOnly
              />
              <Combobox.Button className="absolute inset-y-0 right-0  mr-2">
                <ChevronUpDownIcon
                  className="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Combobox.Options className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto mt-1 z-10">
              {missedReports.map((report) => (
                <Combobox.Option
                  key={report.toString()}
                  value={report}
                  className={({ active }) =>
                    `cursor-pointer select-none relative py-2 pl-3 pr-4 ${
                      active ? 'bg-blue-600 text-white' : 'text-gray-900'
                    }`
                  }
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {report ? 'True' : 'False'}
                    </span>
                  )}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </div>
        </Combobox>
      </div>
        </div>
  
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">Upload File</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF up to 10MB</p>
            </div>
          </div>
          {errors.file && <p className="mt-1 text-xs text-red-500">{errors.file}</p>}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
      {/* {Object.keys(errors).length > 0 && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Please correct the errors in the form before submitting.
          </AlertDescription>
        </Alert>
      )} */}
                 <div className="flex justify-center mt-4 items-center">
    <button
        onClick={''}
        disabled={''}
        className='inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200'
    >
       Generate Report Cards
    </button>

</div>
    </div>
  );
};

export default QuestionPaperUploadForm;