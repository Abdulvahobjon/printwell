export default function MapSection() {
  return (
    <div className="bg-[#031425]">
      <section className="w-full">
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2995.6801208020242!2d69.23793926054736!3d41.337568671186574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHazrati%20Imom%20ansambil!5e0!3m2!1sen!2s!4v1753100809890!5m2!1sen!2s"
            className="w-full h-[400px] sm:h-[500px] lg:h-[614px] pt-10"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}