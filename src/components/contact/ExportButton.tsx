import { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Download } from "lucide-react";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  phone?: string;
  timestamp: string;
}

export const ExportButton = () => {
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();

  const handleExport = async () => {
    try {
      setIsExporting(true);
      
      // Get submissions from localStorage
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]') as ContactSubmission[];
      
      if (submissions.length === 0) {
        toast({
          title: "No submissions",
          description: "There are no contact submissions to export.",
          variant: "destructive",
        });
        return;
      }

      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.json_to_sheet(submissions);

      // Add worksheet to workbook
      XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");

      // Generate Excel file
      XLSX.writeFile(wb, "syza-tech-contact-submissions.xlsx");

      toast({
        title: "Export successful",
        description: "Contact submissions have been exported to Excel.",
      });
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "There was an error exporting the submissions.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <Button
      onClick={handleExport}
      disabled={isExporting}
      variant="outline"
      className="w-full sm:w-auto"
    >
      <Download className="mr-2 h-4 w-4" />
      {isExporting ? "Exporting..." : "Export Submissions to Excel"}
    </Button>
  );
};