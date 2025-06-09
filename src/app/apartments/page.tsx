import React from "react";

export default function ApartmentsPage() {
    return (
        <main className="min-h-screen bg-white p-8">
            <h1 className="text-3xl font-bold mb-6">Available Apartment Hotels</h1>
            {/* TODO: Replace with actual apartment hotel listing component */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded-lg shadow-sm">Apartment Hotel 1 (placeholder)</div>
                <div className="p-6 border rounded-lg shadow-sm">Apartment Hotel 2 (placeholder)</div>
                <div className="p-6 border rounded-lg shadow-sm">Apartment Hotel 3 (placeholder)</div>
            </div>
        </main>
    );
} 