import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

interface PDFViewerModalProps {
	isOpen: boolean;
	onClose: () => void;
	pdfUrl: string;
}

export const PDFViewerModal = ({
	isOpen,
	onClose,
	pdfUrl,
}: PDFViewerModalProps) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl h-[80vh] flex flex-col">
				<DialogTitle>PDF Viewer</DialogTitle>
				<DialogDescription>View PDF document</DialogDescription>

				<div className="flex-1 w-full h-full">
					<iframe
						src={pdfUrl}
						className="w-full h-full rounded-md"
						title="PDF Viewer"
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default PDFViewerModal;
