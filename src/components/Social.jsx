import React from 'react'
import { FB_PAGE_URL, INSTA_EMBED_URL } from '../data';

const Social = () => {
  return (
    <section id="social" className="py-5 bg-dark text-light">
      <div className="container text-center">
        <h2 className="display-5 fw-bold font-serif mb-5 text-warning">Find Us On Social Media</h2>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <div className="bg-black p-4 rounded-3 shadow-1g border border-warning border-opacity-25">
              <h3 className="fs-4 fw-semibold text-white mb-4">Facebook</h3>
              <div className="w-100 bg-dark d-flex align-items-center justify-content-center text-light" style={{ minHeight: '500px' }}>
                <iframe
                  src={FB_PAGE_URL}
                  title="Bismillah Restaurant Facebook Page"
                  width="100%"
                  height="500"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="col-lg-4">
            <div className="bg-black p-4 rounded-3 shadow-1g border border-warning border-opacity-25">
              <h3 className="fs-4 fw-semibold text-white mb-4">Instagram</h3>
              <div className="d-flex justify-content-center bg-dark p-2 rounded">
                <iframe
                  className="rounded"
                  src={INSTA_EMBED_URL}
                  title="Bismillah Restaurant Instagram Post"
                  frameBorder="0"
                  scrolling="no"
                  allowtransparency="true"
                  loading="lazy"
                  style={{ height: '500px', width: '100%', maxWidth: '340px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;