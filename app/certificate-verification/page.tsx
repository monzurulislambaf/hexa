"use client";

import { useState } from "react";
import { Search, CheckCircle, XCircle, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CertificateResult {
  id: string;
  name: string;
  issueDate: string;
  status: "valid" | "invalid" | "expired";
  type: string;
}

export default function CertificateVerificationPage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<CertificateResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    if (!certId.trim()) return;

    setIsSearching(true);
    try {
      const response = await fetch(`/api/certificates?search=${certId}`);
      if (response.ok) {
        const data = await response.json();
        setResult(data.certificate || null);
      }
    } catch {
      setResult(null);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm mb-4 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-primary" />
              Certificate Verification
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Verify Your Certificate
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Enter your certificate ID to verify its authenticity and check the
              current status.
            </p>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="certId">Certificate ID</Label>
              <div className="flex gap-3">
                <Input
                  id="certId"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="Enter your certificate ID (e.g., HEXA-2025-001)"
                  className="flex-1"
                />
                <Button type="submit" disabled={isSearching}>
                  {isSearching ? (
                    "Verifying..."
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Verify
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>

          {/* Result */}
          {result && (
            <div className="mt-8 p-6 rounded-xl ring-1 ring-border bg-card">
              <div className="flex items-center gap-3 mb-4">
                {result.status === "valid" ? (
                  <CheckCircle className="h-8 w-8 text-sustainability-green" />
                ) : (
                  <XCircle className="h-8 w-8 text-destructive" />
                )}
                <div>
                  <h3 className="font-semibold text-lg">
                    Certificate {result.status === "valid" ? "Verified" : "Not Found"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {result.status === "valid"
                      ? "This certificate is authentic and currently valid."
                      : "No certificate found with this ID."}
                  </p>
                </div>
              </div>

              {result.status === "valid" && (
                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Certificate ID</p>
                    <p className="font-medium">{result.id}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Issued To</p>
                    <p className="font-medium">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Issue Date</p>
                    <p className="font-medium">{result.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Certificate Type</p>
                    <p className="font-medium">{result.type}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Demo info */}
          <div className="mt-8 p-4 bg-muted/50 rounded-xl">
            <div className="flex items-start gap-3">
              <FileCheck className="h-5 w-5 text-primary mt-0.5" />
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">Demo Mode</p>
                <p>
                  This is a demonstration of the certificate verification system.
                  In production, this would connect to our database to verify
                  real certificates issued by Hexa Engineering Limited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
