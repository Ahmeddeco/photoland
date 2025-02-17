// 'use client'

import { OurFileRouter } from '@/app/api/uploadthing/core'
import { UploadDropzone } from '@uploadthing/react'

export const UploadThing = () => (
	<UploadDropzone<OurFileRouter, 'imageUploader'>
		endpoint='imageUploader'
		onClientUploadComplete={(res) => {
			// Do something with the response

			const imgUrl = res[0].ufsUrl

			console.log('Files: ', imgUrl, res)
			alert('Upload Completed')
		}}
		onUploadError={(error: Error) => {
			alert(`ERROR! ${error.message}`)
		}}
		onUploadBegin={(name) => {
			// Do something once upload begins
			console.log('Uploading: ', name)
		}}
		onDrop={(acceptedFiles) => {
			// Do something with the accepted files
			console.log('Accepted files: ', acceptedFiles)
		}}
	/>
)
