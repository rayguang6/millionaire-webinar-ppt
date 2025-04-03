import React from 'react'
import { WebinarContent } from '../types/presentation'

const SlideViewer = (content: WebinarContent) => {
  return (
    <div className="p-8 bg-white text-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">{content.mainOutcome}</h1>
        
        <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">Why This Is Different:</h2>
            <ul className="space-y-2">
                {content.differentReasons.map((reason, index) => (
                    <li key={index} className="text-gray-900">{reason}</li>
                ))}
            </ul>
        </div>

        <h3 className="text-xl font-medium mb-4 text-gray-900">{content.targetAudience}</h3>
        
        <div className="mb-6">
            <h4 className="text-lg font-medium mb-3 text-gray-900">Common Pain Points:</h4>
            <ul className="space-y-2">
                {content.painPoints.map((point, index) => (
                    <li key={index} className="text-gray-900">{point}</li>
                ))}
            </ul>
        </div>

        <div className="mb-6">
            <h5 className="text-lg font-medium mb-3 text-gray-900">You'll Discover:</h5>
            <ul className="space-y-2">
                {content.secrets.map((secret, index) => (
                    <li key={index} className="text-gray-900">{secret}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SlideViewer