

const Educational = () => {
  return (
    <div>
      <section
        id="education"
        className="bg-[#1c2741]  text-white py-10 px-6 md:px-20"
      >
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">
          Educational Qualification
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Diploma in Agriculture</h3>
            <p className="text-sm text-gray-300">
            Agricultural Training Institute,(ATI) Homna , Cumilla 2024  Present
            </p>
            <p className="text-sm text-gray-400">
              Currently studying (Expected graduation: 2028)
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Secondary School Certificate (SSC)
            </h3>
            <p className="text-sm text-gray-300">Faridgonj AR High School, 2024</p>
            <p className="text-sm text-gray-400">Science Group</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Educational;
