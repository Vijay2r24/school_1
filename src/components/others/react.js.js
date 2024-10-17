import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const QuestionPaperUploadForm = () => {
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
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Question Paper upload Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Academic Year</label>
            <input
              type="text"
              name="academicYear"
              value={formData.academicYear}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              disabled
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Test Name</label>
            <input
              type="text"
              name="testName"
              value={formData.testName}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.testName ? 'border-red-500' : ''}`}
            />
            {errors.testName && <p className="mt-1 text-xs text-red-500">{errors.testName}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Exam Type</label>
            <select
              name="examType"
              value={formData.examType}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.examType ? 'border-red-500' : ''}`}
            >
              <option value="">Select Exam Type</option>
              <option value="midterm">Midterm</option>
              <option value="final">Final</option>
            </select>
            {errors.examType && <p className="mt-1 text-xs text-red-500">{errors.examType}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Stream</label>
            <select
              name="stream"
              value={formData.stream}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.stream ? 'border-red-500' : ''}`}
            >
              <option value="">Select Stream</option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>
            {errors.stream && <p className="mt-1 text-xs text-red-500">{errors.stream}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Class</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.class ? 'border-red-500' : ''}`}
            >
              <option value="">Select Class</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            {errors.class && <p className="mt-1 text-xs text-red-500">{errors.class}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Course Type</label>
            <select
              name="courseType"
              value={formData.courseType}
              onChange={handleInputChange}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${errors.courseType ? 'border-red-500' : ''}`}
            >
              <option value="">Select Course Type</option>
              <option value="regular">Regular</option>
              <option value="honors">Honors</option>
            </select>
            {errors.courseType && <p className="mt-1 text-xs text-red-500">{errors.courseType}</p>}
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
      {Object.keys(errors).length > 0 && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Please correct the errors in the form before submitting.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default QuestionPaperUploadForm;