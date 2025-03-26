"use client";
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      <LanguageSelector />
      <Card className="mt-4">
        <CardContent className="p-4">
          <p>✨ AI-generated description here...</p>
          <Button className="mt-4">{t("adopt")}</Button>
        </CardContent>
      </Card>
    </main>
  );
}
