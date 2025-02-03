import React, { useState } from 'react';
import './ProjectCard.css';  // Import the CSS for styling

const ProjectCard = ({ imageUrl, projectType, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open modal
  const openModal = () => setIsModalOpen(true);

  // Close modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className="project-card"
        onClick={openModal}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="project-image"
        />

        {/* Project type */}
        <span className="project-type">{projectType}</span>

        {/* Project title */}
        <div className="project-title">
          {title}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <img
              src={imageUrl}
              alt={title}
              className="modal-image"
            />
            <div className="modal-details">
              <h3 className="modal-title">{title}</h3>
              <span className="modal-type">{projectType}</span>
              <p className="modal-description">{description}</p>
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="modal-close-btn"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
