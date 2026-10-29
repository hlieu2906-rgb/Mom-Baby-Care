import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Máy Hút Sữa Điện Rảnh Tay MomCare Pro',
    category: 'Máy hút sữa thông minh',
    price: 890000,
    originalPrice: 1250000,
    badge: 'Khuyên dùng - Bán chạy',
    imageIcon: '🤱',
    image: '/src/assets/images/momcare_pro_pump_1793258814756.jpg',
    imageBg: 'from-rose-500/10 to-pink-500/20',
    desc: 'Không dây cắm rườm rà, 9 cấp độ massage & vắt sâu, màn hình LED cảm ứng thông minh nhớ lực hút, độ ồn cực thấp dưới 40dB.',
    fullDesc: 'MomCare Pro là dòng máy hút sữa không dây thế hệ mới được thiết kế đặc biệt cho các mẹ bỉm hiện đại. Động cơ siêu nhỏ gọn đặt trực tiếp trên cúp hút, cho phép mẹ tự do di chuyển, lái xe, nấu nướng hoặc làm việc văn phòng mà không bị vướng víu dây nhợ hay bình chứa cồng kềnh.',
    features: [
      'Công nghệ nhịp kép mô phỏng nhịp bú sinh học của bé (kích thích & hút sâu)',
      '9 cấp độ hút với chip nhớ thông minh tự lưu chế độ ưa thích',
      'Độ ồn cực thấp < 40dB êm dịu, không đánh thức bé yêu khi hút cữ đêm',
      'Dung tích cúp chứa 180ml với vạch chia rõ ràng, chống trào ngược tuyệt đối',
      'Pin sạc Lithium 1200mAh dùng liên tục 5-6 cữ hút cho mỗi lần sạc đầy',
      'Được kiểm định chất lượng an toàn bởi Viện Pasteur & chứng nhận FDA'
    ],
    specs: [
      { label: 'Dung tích cúp', value: '180ml' },
      { label: 'Thời lượng pin', value: '1200mAh (~150 phút hoạt động)' },
      { label: 'Cổng sạc', value: 'Type-C tiện lợi (sạc chung với điện thoại)' },
      { label: 'Chế độ hoạt động', value: 'Massage kích sữa (9 cấp) + Hút kiệt (9 cấp)' },
      { label: 'Độ ồn', value: '< 38dB' },
      { label: 'Chất liệu', value: 'Silicone y tế cao cấp + Nhựa PP không chứa BPA' },
      { label: 'Bảo hành', value: 'Bảo hành chính hãng 24 tháng, 1 đổi 1 trong 30 ngày' }
    ],
    inStock: true,
    rating: 4.9,
    reviewsCount: 384
  },
  {
    id: 2,
    name: 'Máy Hút Sữa Rảnh Tay UltraQuiet S2',
    category: 'Máy hút sữa thông minh',
    price: 980000,
    originalPrice: 1400000,
    badge: 'Siêu êm < 35dB',
    imageIcon: '✨',
    image: '/src/assets/images/ultraquiet_s2_pump_1793258814612.jpg',
    imageBg: 'from-amber-500/10 to-rose-500/20',
    desc: 'Thiết kế siêu mỏng giấu trọn trong áo ngực, cảm ứng nhịp sinh học tự nhiên, pin bền bỉ 6 cữ hút, chuẩn y khoa.',
    fullDesc: 'UltraQuiet S2 nổi bật với thiết kế ôm sát đường cong ngực mẹ, độ dày động cơ chỉ 5.5cm giúp mẹ hoàn toàn tự tin mặc áo ngực thông thường đi ra ngoài hoặc làm việc công sở mà không hề bị cộm hay lộ liễu. Cơ chế giảm chấn âm thanh 3 lớp đưa độ ồn xuống dưới 35dB.',
    features: [
      'Độ ồn siêu tĩnh chỉ 33-35dB - dòng máy êm nhất thị trường',
      'Thiết kế công thái học siêu mỏng giấu kín trong áo lót cho con bú',
      'Cảm biến lực hút tự điều chỉnh theo áp lực mô ngực chống tổn thương núm ti',
      'Màn hình cảm ứng OLED ẩn tinh tế hiển thị thời gian hút và dung lượng pin',
      'Kèm theo 3 đệm phễu chuyển đổi kích cỡ (19mm, 21mm, 24mm) trong hộp'
    ],
    specs: [
      { label: 'Dung tích cúp', value: '200ml' },
      { label: 'Trọng lượng', value: 'Chỉ 218g' },
      { label: 'Độ ồn', value: '< 35dB (êm chuẩn phòng ngủ)' },
      { label: 'Thời lượng pin', value: '1400mAh (sử dụng 6 cữ hút)' },
      { label: 'Phụ kiện đi kèm', value: 'Đủ 3 size đệm phễu + Cáp Type-C + Dây nối ngực áo' },
      { label: 'Bảo hành', value: '24 tháng tại Showroom Hà Nội, mượn máy 0đ' }
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 265
  },
  {
    id: 3,
    name: 'Phễu Silicone Y Tế Siêu Mềm (Bộ 2 cái)',
    category: 'Phụ kiện chuẩn an toàn',
    price: 145000,
    originalPrice: 195000,
    badge: '100% Silicone Y Tế',
    imageIcon: '🍼',
    image: '/src/assets/images/silicone_flanges_pair_1793258814693.jpg',
    imageBg: 'from-pink-500/10 to-rose-400/20',
    desc: 'Chất liệu silicone y tế siêu mềm mại ôm khít, không đau rát mô ngực. Đủ size 21mm, 24mm và 27mm.',
    fullDesc: 'Phễu hút sữa silicone y tế Mom&Baby Care loại bỏ hoàn toàn cảm giác căng tức, cọ xát rát buốt do phễu nhựa cứng truyền thống gây ra. Đường viền uốn lượn ôm sát quầng ngực tạo lực hút chân không kín tuyệt đối giúp kích thích phản xạ xuống sữa nhanh gấp 1.5 lần.',
    features: [
      'Silicone cấp thực phẩm y tế chuẩn Hoa Kỳ (FDA Approved), chịu nhiệt tới 200°C',
      'Góc phễu 105° mở rộng hỗ trợ tia sữa thông suốt không bị chèn ép ống dẫn',
      'Mặt trong hạt nổi massage nhẹ nhàng vào các nang sữa',
      'Tương thích tuyệt đối với máy hút sữa rảnh tay MomCare, Spectra, Medela, v.v.'
    ],
    specs: [
      { label: 'Quy cách đóng gói', value: 'Bộ 2 chiếc tiệt trùng đóng vỉ' },
      { label: 'Kích cỡ lựa chọn', value: '21mm / 24mm / 27mm' },
      { label: 'Chịu nhiệt', value: '-20°C đến 220°C (dùng được máy rửa bát & tiệt trùng UV/hơi nước)' },
      { label: 'Hạn sử dụng khuyến nghị', value: 'Nên thay sau mỗi 4-6 tháng sử dụng' }
    ],
    sizes: ['Size 21mm (Chân ti nhỏ < 18mm)', 'Size 24mm (Chân ti chuẩn 19-21mm)', 'Size 27mm (Chân ti lớn > 22mm)'],
    inStock: true,
    rating: 4.8,
    reviewsCount: 412
  },
  {
    id: 4,
    name: 'Núm Ti Kháng Khuẩn Mô Phỏng Tự Nhiên (Set 2)',
    category: 'Phụ kiện bú bình',
    price: 85000,
    originalPrice: 110000,
    badge: 'Chống sặc đỉnh cao',
    imageIcon: '👶',
    image: '/src/assets/images/baby_nipples_pair_1793258814675.jpg',
    imageBg: 'from-blue-500/10 to-cyan-500/20',
    desc: 'Mô phỏng khớp ngậm ti mẹ đàn hồi tự nhiên, giúp bé dễ dàng chuyển đổi bú mẹ và bú bình không sợ bỏ ti.',
    fullDesc: 'Núm ti thiết kế mô phỏng bầu ngực mẹ với van thông khí kép AirFlex kiểm soát lượng sữa chảy theo lực mút của bé, ngăn chặn tối đa bọt khí đi vào bụng trẻ, loại bỏ triệt để hiện tượng đầy hơi, nôn trớ và quấy khóc sau ăn.',
    features: [
      'Silicone siêu mềm dẻo dai chống xé rách khi bé nhai ngứa nướu',
      'Hệ thống van chống sặc kép tự động điều áp theo lực ngậm bú',
      'Vùng quầng nhám vi mô chống trơn trượt khớp ngậm',
      'Phù hợp cho bé từ sơ sinh 0 tháng tuổi đến 18 tháng'
    ],
    specs: [
      { label: 'Quy cách', value: 'Hộp 2 núm ti chính hãng' },
      { label: 'Size núm', value: 'Size S (0-3M), Size M (3-6M), Size L (6M+)' },
      { label: 'Chất liệu', value: 'Medical Liquid Silicone không mùi, không BPA' }
    ],
    sizes: ['Size S (0-3 tháng)', 'Size M (3-6 tháng)', 'Size L (Trên 6 tháng)'],
    inStock: true,
    rating: 4.9,
    reviewsCount: 198
  },
  {
    id: 5,
    name: 'Bộ 2 Van Chân Không & Màng Hút Chống Tràn',
    category: 'Linh kiện thay thế',
    price: 55000,
    originalPrice: 75000,
    badge: 'Chính hãng 100%',
    imageIcon: '⚙️',
    image: '/src/assets/images/pump_duckbill_valves_1793258815142.jpg',
    imageBg: 'from-emerald-500/10 to-teal-500/20',
    desc: 'Giữ áp lực hút chuẩn y khoa luôn ổn định, ngăn sữa chảy ngược tuyệt đối, bảo vệ động cơ máy hút.',
    fullDesc: 'Van lưỡi gà mỏ vịt và màng ngăn chân không là linh kiện cốt lõi tạo nên áp suất hút của máy. Khi van bị giãn hoặc rách vi thể sau một thời gian tiệt trùng, lực hút của máy sẽ tụt nghiêm trọng. Thay bộ van mới giúp phục hồi 100% công suất hút như lúc mới mua.',
    features: [
      'Lưỡi van khép kín siêu khít giúp giữ chân không ổn định',
      'Màng silicone đàn hồi cao ngăn hoàn toàn hơi ẩm và sữa đi vào buồng máy',
      'Dễ tháo lắp vệ sinh hàng ngày, an toàn trong máy tiệt trùng UV/hơi nước'
    ],
    specs: [
      { label: 'Bộ sản phẩm gồm', value: '2 van mỏ vịt + 2 màng ngăn chân không' },
      { label: 'Tương thích', value: 'Máy hút sữa MomCare Pro, UltraQuiet và đa số máy rảnh tay' },
      { label: 'Chu kỳ khuyến nghị', value: 'Thay định kỳ 2-3 tháng/lần để giữ lực hút mạnh nhất' }
    ],
    inStock: true,
    rating: 4.8,
    reviewsCount: 520
  },
  {
    id: 6,
    name: 'Hộp 30 Túi Trữ Sữa Tiệt Trùng Sẵn (250ml)',
    category: 'Phụ kiện trữ sữa',
    price: 75000,
    originalPrice: 99000,
    badge: 'Cảm ứng nhiệt',
    imageIcon: '📦',
    image: '/src/assets/images/milk_storage_bags_box_1793258815632.jpg',
    imageBg: 'from-purple-500/10 to-pink-500/20',
    desc: 'Khóa zip 2 lớp chống rò rỉ, có dải cảm ứng nhiệt độ thông minh đổi màu giúp mẹ hâm sữa an toàn cho bé.',
    fullDesc: 'Túi trữ sữa Mom&Baby Care ứng dụng công nghệ tiệt trùng bằng tia Gamma công nghiệp ngay từ khâu sản xuất, mẹ có thể bóc mở rót sữa trực tiếp mà không cần tiệt trùng lại. Dải cảm ứng nhiệt hiển thị màu sắc trực quan (Xanh tím: quá lạnh, Hồng: nhiệt độ vàng 37-40°C sẵn sàng cho bé uống, Trắng: quá nóng).',
    features: [
      'Cảm biến nhiệt độ thông minh giúp kiểm tra nhiệt độ chuẩn không cần cặp nhiệt độ',
      'Đường viền gia nhiệt ép nhiệt 3 cạnh siêu dày chịu va đập trong ngăn đông',
      'Khóa Double Zip đôi tuyệt đối chống rò rỉ và ám mùi tủ lạnh',
      'Vòi rót sữa tiện lợi bên hông, không lo đổ vương vãi lãng phí sữa mẹ'
    ],
    specs: [
      { label: 'Dung tích', value: '250ml / túi' },
      { label: 'Quy cách', value: 'Hộp 30 túi (đã tiệt trùng bằng tia Gamma)' },
      { label: 'Khu vực ghi chú', value: 'Có ô ghi ngày giờ vắt sữa rõ ràng, không phai' },
      { label: 'Chất liệu', value: 'Nhựa PET + LLDPE nguyên sinh an toàn thực phẩm' }
    ],
    inStock: true,
    rating: 5.0,
    reviewsCount: 680
  }
];

export const FORMAT_CURRENCY = (amount: number): string => {
  return amount.toLocaleString('vi-VN') + ' ₫';
};

export const KNOWLEDGE_TIPS = [
  {
    id: 1,
    title: 'Cách kích sữa chuẩn L7/L3 không gây stress',
    time: '5 phút đọc',
    category: 'Kích sữa',
    summary: 'Phác đồ hút sữa giãn cữ khoa học kết hợp uống nước ấm và massage mô ngực trước mỗi cữ hút giúp sữa về ướt áo sau 5-7 ngày.'
  },
  {
    id: 2,
    title: 'Hướng dẫn đo size phễu chính xác chống đau rát',
    time: '3 phút đọc',
    category: 'Mẹo chọn máy',
    summary: 'Nếu chân ti cọ xát vào thành ống phễu gây đỏ rát, mẹ đang dùng sai size. Xem ngay cách tính đường kính chân ti + 3-4mm.'
  },
  {
    id: 3,
    title: 'Quy tắc vàng bảo quản sữa mẹ theo Bộ Y Tế',
    time: '4 phút đọc',
    category: 'Bảo quản sữa',
    summary: 'Nhiệt độ phòng (4 giờ), ngăn mát tủ lạnh (48 giờ), ngăn đông tủ lạnh (3-6 tháng). Cách rã đông đúng giữ nguyên kháng thể IgM/IgA.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Mẹ Bùi Quỳnh Chi',
    baby: 'Bé Bon (3 tháng tuổi - Cầu Giấy, Hà Nội)',
    avatar: '👩‍🦰',
    rating: 5,
    comment: 'Mình dùng MomCare Pro hút sữa lúc đang lái xe đi làm và ngồi văn phòng cực kỳ tiện. Máy êm ru đồng nghiệp ngồi cạnh không hề nghe thấy tiếng gì. Sữa từ 200ml/ngày nay đã lên được 850ml/ngày!',
    verified: true
  },
  {
    id: 2,
    name: 'Mẹ Trần Thu Trang',
    baby: 'Bé Miu (5 tháng tuổi - Đống Đa, Hà Nội)',
    avatar: '👩‍🍼',
    rating: 5,
    comment: 'Dịch vụ ở showroom Cầu Giấy tốt vô cùng. Mẹ được chuyên viên hỗ trợ đo size chân ti miễn phí, đổi ngay phễu 21mm hút êm ru không còn bị nứt cổ gà nữa. Còn được mượn máy dự phòng lúc gửi máy vệ sinh.',
    verified: true
  },
  {
    id: 3,
    name: 'Mẹ Lê Hồng Hạnh',
    baby: 'Bé Ken (1.5 tháng tuổi - Hà Đông, Hà Nội)',
    avatar: '👱‍♀️',
    rating: 5,
    comment: 'Máy UltraQuiet S2 thật sự nhẹ và êm, cữ đêm hút ngay cạnh con mà con ngủ say sưa. Đặt hàng qua web 2 tiếng sau showroom Hà Nội giao tới tận cửa, hướng dẫn sử dụng rất tận tình.',
    verified: true
  }
];
